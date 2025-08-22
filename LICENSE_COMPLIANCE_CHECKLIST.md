# License Compliance Checklist

This checklist ensures ongoing compliance with open source software license requirements for the INT Creative Hub project.

## Pre-Development Setup ✅

- [x] **Project LICENSE file created** - Clarifies proprietary licensing
- [x] **THIRD_PARTY_LICENSES.md created** - Contains all required attributions  
- [x] **Initial dependency audit completed** - All current dependencies reviewed
- [ ] **License checking tools installed** - See setup instructions below
- [ ] **Team training completed** - All developers aware of requirements

## Before Adding New Dependencies

### Dependency Review Process

- [ ] **Check package license** using `npm info <package> license`
- [ ] **Verify license compatibility** - Must be permissive (MIT, Apache, ISC, BSD)
- [ ] **Avoid copyleft licenses** - No GPL, AGPL, LGPL, MPL
- [ ] **Document license in tracking** - Update THIRD_PARTY_LICENSES.md
- [ ] **Get approval for unusual licenses** - Consult legal if not standard permissive

### Pre-Approved License Types ✅
- MIT License
- Apache License 2.0  
- ISC License
- BSD 2-Clause / 3-Clause
- Unlicense / Public Domain

### Prohibited License Types 🚫
- GPL (any version)
- AGPL (any version) 
- LGPL (any version)
- MPL (any version)
- SSPL (Server Side Public License)
- Any "copyleft" license requiring source disclosure

## Monthly Compliance Reviews

### Dependency Audit (1st of each month)

- [ ] **Run license scanner** - `npx license-checker --onlyAllow 'MIT;Apache-2.0;ISC;BSD-2-Clause;BSD-3-Clause'`
- [ ] **Review new dependencies** - Check package-lock.json changes
- [ ] **Update THIRD_PARTY_LICENSES.md** - Add any new dependencies
- [ ] **Verify no copyleft licenses** - Ensure no prohibited licenses added
- [ ] **Check for license changes** - Major version updates may change licenses

### Build Output Review

- [ ] **Check generated files** - Ensure copyright notices preserved where required
- [ ] **Verify Tailwind output** - Check for MIT license comment in CSS
- [ ] **Review distribution files** - Confirm attributions in production builds
- [ ] **Test license links** - Ensure all referenced URLs are accessible

## Quarterly Legal Compliance Audit

### Comprehensive Review (Start of each quarter)

- [ ] **Full dependency tree analysis** - Include all transitive dependencies
- [ ] **License compatibility verification** - Ensure no conflicts introduced
- [ ] **Attribution completeness check** - Verify all required notices present
- [ ] **Documentation updates** - Update compliance procedures as needed
- [ ] **Tool effectiveness review** - Assess scanning tools and processes

### Risk Assessment Update

- [ ] **Review industry best practices** - Check for new compliance requirements
- [ ] **Evaluate new tools** - Consider better automation options
- [ ] **Update prohibited/approved lists** - Based on legal landscape changes
- [ ] **Team training refresh** - Ensure all developers current on requirements

## Build Process Integration

### Pre-Build Checks

- [ ] **License scan passes** - All automated checks successful
- [ ] **Attribution files current** - No missing dependencies in documentation
- [ ] **Copyright year updated** - Current year in license files

### Post-Build Verification  

- [ ] **Generated files reviewed** - Copyright notices preserved
- [ ] **Distribution package complete** - All required license files included
- [ ] **Third-party notices visible** - Attributions accessible to end users

## Emergency Procedures

### License Violation Discovered

1. [ ] **Immediately stop distribution** - Halt deployments if applicable
2. [ ] **Assess violation scope** - Determine which licenses/dependencies affected
3. [ ] **Implement fix** - Add missing attributions or replace problematic dependency
4. [ ] **Document incident** - Record cause and prevention measures
5. [ ] **Review processes** - Update checklist to prevent recurrence

### Copyleft License Detected

1. [ ] **Quarantine the dependency** - Remove from active development immediately
2. [ ] **Assess contamination risk** - Determine if any proprietary code affected
3. [ ] **Find alternative** - Replace with permissive-licensed equivalent
4. [ ] **Legal consultation** - Contact attorney if significant exposure possible
5. [ ] **Process improvement** - Strengthen pre-approval procedures

## Tools and Automation

### Required Tools

```bash
# Install license checking tools
npm install -g license-checker
npm install -g license-compliance-checker

# Install security and license scanner
npm install -g audit-ci
```

### Automated Scanning Commands

```bash
# Check only approved licenses
npx license-checker --onlyAllow 'MIT;Apache-2.0;ISC;BSD-2-Clause;BSD-3-Clause'

# Generate full license report  
npx license-checker --json > current-licenses.json

# Check for security issues
npm audit

# Detailed dependency analysis
npx license-checker --csv --out licenses.csv
```

### IDE Integration

- [ ] **VS Code extensions installed** - License compliance helpers
- [ ] **Pre-commit hooks configured** - Automatic license checking
- [ ] **Package.json validation** - Ensure license field present in custom packages

## Compliance Documentation

### Required Files (Must be current)

- [x] **LICENSE** - Project licensing terms
- [x] **THIRD_PARTY_LICENSES.md** - All dependency attributions
- [x] **LICENSE_COMPLIANCE_CHECKLIST.md** - This checklist (keep updated)
- [ ] **DEPENDENCY_APPROVAL_LOG.md** - Record of all license reviews

### Regular Updates

- [ ] **Quarterly checklist review** - Update procedures based on experience  
- [ ] **Annual legal consultation** - Professional review of compliance status
- [ ] **Tool evaluation** - Assess new compliance automation options
- [ ] **Industry monitoring** - Stay current with open source legal developments

## Team Responsibilities

### Project Owner (Jake - INT Creative LLC)
- [ ] Final approval for unusual licenses
- [ ] Quarterly compliance sign-off
- [ ] Legal consultation coordination
- [ ] Policy updates and team communication

### Lead Developer  
- [ ] Daily compliance awareness
- [ ] New dependency reviews
- [ ] Monthly audit execution
- [ ] Tool maintenance

### All Developers
- [ ] Check licenses before adding dependencies
- [ ] Follow established approval process
- [ ] Report compliance concerns immediately
- [ ] Maintain current training

## Compliance Contacts

**Legal Questions**: Consult qualified IP attorney  
**Technical Implementation**: Claude Code assistance  
**Process Questions**: Jake (jake@intcreative.co)

## Success Metrics

### Monthly Targets
- [ ] Zero prohibited licenses detected
- [ ] 100% attribution coverage
- [ ] All tools functioning correctly
- [ ] Documentation current

### Quarterly Goals  
- [ ] Process improvements implemented
- [ ] Team training completed
- [ ] Tool effectiveness verified
- [ ] Risk assessment updated

---

**Document Owner**: Jake (INT Creative LLC)  
**Last Updated**: August 22, 2025  
**Next Review**: September 22, 2025  
**Version**: 1.0