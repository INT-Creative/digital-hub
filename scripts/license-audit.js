#!/usr/bin/env node

/**
 * License Compliance Audit Script
 * 
 * Automates license checking for the INT Creative Hub project
 * Ensures compliance with open source license requirements
 * 
 * Usage: node scripts/license-audit.js [--fix] [--report]
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const APPROVED_LICENSES = [
    'MIT',
    'Apache-2.0',
    'ISC',
    'BSD-2-Clause',
    'BSD-3-Clause',
    'Unlicense',
    'WTFPL',
    'CC0-1.0',
    'Python-2.0',     // Safe for use
    'CC-BY-4.0',      // Creative Commons Attribution
    'CC-BY-3.0',      // Creative Commons Attribution
    'BlueOak-1.0.0',  // Business-friendly license
    '0BSD'            // Zero-clause BSD (public domain equivalent)
];

const PROHIBITED_LICENSES = [
    'GPL-1.0',
    'GPL-2.0',
    'GPL-3.0',
    'AGPL-1.0',
    'AGPL-3.0',
    'LGPL-2.0',
    'LGPL-2.1',
    'LGPL-3.0',
    'MPL-1.1',
    'MPL-2.0',
    'SSPL-1.0',
    'CPAL-1.0'
];

const RISKY_LICENSES = [
    'CDDL-1.0',
    'CDDL-1.1',
    'EPL-1.0',
    'EPL-2.0'
];

class LicenseAuditor {
    constructor() {
        this.issues = [];
        this.warnings = [];
        this.approvedCount = 0;
        this.totalCount = 0;
    }

    /**
     * Main audit execution
     */
    async runAudit(options = {}) {
        console.log('🔍 Starting License Compliance Audit...\n');

        try {
            // Check if license-checker is installed
            this.checkTools();

            // Run license scan
            const licenseData = this.scanLicenses();
            
            // Analyze results
            this.analyzeLicenses(licenseData);
            
            // Generate reports
            if (options.report) {
                this.generateReport();
            }
            
            // Auto-fix issues if requested
            if (options.fix) {
                this.autoFix();
            }
            
            // Display summary
            this.displaySummary();
            
            return this.issues.length === 0;
            
        } catch (error) {
            console.error('❌ Audit failed:', error.message);
            return false;
        }
    }

    /**
     * Check required tools are installed
     */
    checkTools() {
        try {
            execSync('npx license-checker --version', { stdio: 'ignore' });
        } catch (error) {
            console.log('📦 Installing license-checker...');
            execSync('npm install license-checker', { stdio: 'inherit' });
        }
    }

    /**
     * Scan all dependencies for licenses
     */
    scanLicenses() {
        console.log('📋 Scanning dependencies...');
        
        try {
            const output = execSync('npx license-checker --json', { 
                encoding: 'utf8',
                stdio: ['ignore', 'pipe', 'ignore']
            });
            
            return JSON.parse(output);
        } catch (error) {
            throw new Error(`License scan failed: ${error.message}`);
        }
    }

    /**
     * Analyze license data for compliance issues
     */
    analyzeLicenses(licenseData) {
        console.log('🔬 Analyzing license compliance...\n');

        for (const [packageName, info] of Object.entries(licenseData)) {
            this.totalCount++;
            
            const license = this.normalizeLicense(info.licenses);
            const packageInfo = {
                name: packageName,
                license: license,
                repository: info.repository,
                path: info.path,
                copyright: info.copyright
            };

            if (this.isProhibited(license)) {
                this.issues.push({
                    type: 'PROHIBITED',
                    severity: 'HIGH',
                    package: packageInfo,
                    message: `Prohibited copyleft license: ${license}`
                });
            } else if (this.isRisky(license)) {
                this.warnings.push({
                    type: 'RISKY',
                    severity: 'MEDIUM',
                    package: packageInfo,
                    message: `Risky license requires review: ${license}`
                });
            } else if (this.isApproved(license)) {
                this.approvedCount++;
                
                // Check for missing attribution
                if (this.requiresAttribution(license) && !this.hasAttribution(packageInfo)) {
                    this.issues.push({
                        type: 'MISSING_ATTRIBUTION',
                        severity: 'MEDIUM',
                        package: packageInfo,
                        message: `Missing attribution for ${license} licensed package`
                    });
                }
            } else {
                this.warnings.push({
                    type: 'UNKNOWN',
                    severity: 'MEDIUM',
                    package: packageInfo,
                    message: `Unknown license requires review: ${license}`
                });
            }
        }
    }

    /**
     * Normalize license strings for consistent comparison
     */
    normalizeLicense(license) {
        if (!license) return 'UNKNOWN';
        
        // Handle arrays and complex license expressions
        if (Array.isArray(license)) {
            return license[0];
        }
        
        // Clean up license string
        return license
            .replace(/[()]/g, '')
            .split(/[,\s+]/)[0]
            .trim();
    }

    /**
     * Check if license is prohibited
     */
    isProhibited(license) {
        return PROHIBITED_LICENSES.some(prohibited => 
            license.toLowerCase().includes(prohibited.toLowerCase())
        );
    }

    /**
     * Check if license is risky
     */
    isRisky(license) {
        return RISKY_LICENSES.some(risky => 
            license.toLowerCase().includes(risky.toLowerCase())
        );
    }

    /**
     * Check if license is approved
     */
    isApproved(license) {
        return APPROVED_LICENSES.some(approved => 
            license.toLowerCase().includes(approved.toLowerCase())
        );
    }

    /**
     * Check if license requires attribution
     */
    requiresAttribution(license) {
        const attributionRequired = ['MIT', 'Apache-2.0', 'BSD'];
        return attributionRequired.some(required => 
            license.toLowerCase().includes(required.toLowerCase())
        );
    }

    /**
     * Check if package has proper attribution
     */
    hasAttribution(packageInfo) {
        try {
            const attributionFile = path.join(__dirname, '..', 'THIRD_PARTY_LICENSES.md');
            const content = fs.readFileSync(attributionFile, 'utf8');
            
            // Check for specific package name first
            if (content.includes(packageInfo.name.split('@')[0])) {
                return true;
            }
            
            // Check for general attribution by license type
            const license = packageInfo.license.toLowerCase();
            if (license.includes('mit') && content.includes('General MIT Licensed Software Attribution')) {
                return true;
            }
            if (license.includes('apache') && content.includes('General Apache 2.0 Licensed Software Attribution')) {
                return true;
            }
            if (license.includes('bsd') && content.includes('General BSD Licensed Software Attribution')) {
                return true;
            }
            
            return false;
        } catch (error) {
            return false;
        }
    }

    /**
     * Generate detailed compliance report
     */
    generateReport() {
        const reportPath = path.join(__dirname, '..', 'license-audit-report.json');
        
        const report = {
            timestamp: new Date().toISOString(),
            summary: {
                total: this.totalCount,
                approved: this.approvedCount,
                issues: this.issues.length,
                warnings: this.warnings.length
            },
            issues: this.issues,
            warnings: this.warnings
        };

        fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
        console.log(`📄 Detailed report saved to: ${reportPath}`);
    }

    /**
     * Attempt to auto-fix common issues
     */
    autoFix() {
        console.log('🔧 Attempting to auto-fix issues...\n');

        let fixedCount = 0;

        // Update THIRD_PARTY_LICENSES.md with missing attributions
        const missingAttributions = this.issues.filter(issue => 
            issue.type === 'MISSING_ATTRIBUTION'
        );

        if (missingAttributions.length > 0) {
            this.updateAttributionFile(missingAttributions);
            fixedCount += missingAttributions.length;
        }

        if (fixedCount > 0) {
            console.log(`✅ Auto-fixed ${fixedCount} issues`);
        } else {
            console.log('ℹ️ No auto-fixable issues found');
        }
    }

    /**
     * Update attribution file with missing entries
     */
    updateAttributionFile(missingAttributions) {
        const attributionFile = path.join(__dirname, '..', 'THIRD_PARTY_LICENSES.md');
        
        try {
            let content = fs.readFileSync(attributionFile, 'utf8');
            
            // Add missing attributions to the MIT section
            const mitSection = content.indexOf('### Development Tools');
            if (mitSection !== -1) {
                let additions = '';
                
                missingAttributions.forEach(issue => {
                    const pkg = issue.package;
                    additions += `- **${pkg.name}** - ${pkg.license} licensed\n`;
                });
                
                if (additions) {
                    content = content.replace(
                        '### Development Tools',
                        `### Development Tools\n${additions}`
                    );
                    
                    fs.writeFileSync(attributionFile, content);
                    console.log(`📝 Updated ${attributionFile} with missing attributions`);
                }
            }
        } catch (error) {
            console.error(`❌ Failed to update attribution file: ${error.message}`);
        }
    }

    /**
     * Display audit summary
     */
    displaySummary() {
        console.log('\n📊 License Compliance Summary');
        console.log('═'.repeat(50));
        
        console.log(`Total Dependencies: ${this.totalCount}`);
        console.log(`Approved Licenses: ${this.approvedCount} ✅`);
        console.log(`Issues Found: ${this.issues.length} ${this.issues.length > 0 ? '❌' : '✅'}`);
        console.log(`Warnings: ${this.warnings.length} ${this.warnings.length > 0 ? '⚠️' : '✅'}`);

        // Display critical issues
        if (this.issues.length > 0) {
            console.log('\n🚨 Critical Issues:');
            this.issues.forEach((issue, index) => {
                console.log(`${index + 1}. [${issue.severity}] ${issue.message}`);
                console.log(`   Package: ${issue.package.name}`);
                console.log(`   License: ${issue.package.license}\n`);
            });
        }

        // Display warnings
        if (this.warnings.length > 0) {
            console.log('⚠️ Warnings:');
            this.warnings.forEach((warning, index) => {
                console.log(`${index + 1}. [${warning.severity}] ${warning.message}`);
                console.log(`   Package: ${warning.package.name}`);
                console.log(`   License: ${warning.package.license}\n`);
            });
        }

        // Compliance status
        const isCompliant = this.issues.length === 0;
        console.log(`\n🎯 Compliance Status: ${isCompliant ? 'COMPLIANT ✅' : 'NON-COMPLIANT ❌'}`);
        
        if (!isCompliant) {
            console.log('\n📋 Next Steps:');
            console.log('1. Review and resolve all critical issues');
            console.log('2. Consider replacing prohibited dependencies');
            console.log('3. Add missing attributions to THIRD_PARTY_LICENSES.md');
            console.log('4. Re-run audit after fixes');
        }
    }
}

// CLI execution
if (import.meta.url === `file://${process.argv[1]}`) {
    const args = process.argv.slice(2);
    const options = {
        fix: args.includes('--fix'),
        report: args.includes('--report')
    };

    const auditor = new LicenseAuditor();
    auditor.runAudit(options)
        .then(isCompliant => {
            process.exit(isCompliant ? 0 : 1);
        })
        .catch(error => {
            console.error('💥 Audit error:', error);
            process.exit(1);
        });
}

export default LicenseAuditor;