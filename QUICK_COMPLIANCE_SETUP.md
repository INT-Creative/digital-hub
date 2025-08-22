# Quick License Compliance Setup Guide

**URGENT**: Complete these steps within 48 hours to ensure legal compliance.

## Immediate Actions Required ⚡

### Step 1: Install License Checking Tools (5 minutes)

```bash
# Navigate to project directory
cd /home/intadmin/Desktop/intcreative-hub

# Install license checker globally
npm install -g license-checker

# Test installation
npx license-checker --version
```

### Step 2: Run Initial Compliance Scan (2 minutes)

```bash
# Quick compliance check
npm run license:check

# Generate detailed report
npm run license:audit
```

### Step 3: Verify Compliance Files (1 minute)

Check that these files exist and are current:
- [x] `LICENSE` - Project license file
- [x] `THIRD_PARTY_LICENSES.md` - Required attributions
- [x] `LICENSE_COMPLIANCE_CHECKLIST.md` - Ongoing procedures
- [ ] `license-audit-report.json` - Generated after first scan

### Step 4: Add to Development Workflow (3 minutes)

Add to your development routine:

```bash
# Before adding new dependencies
npm run license:scan

# Monthly compliance check
npm run license:check

# Before major releases
npm run license:audit
```

## Weekly Maintenance (10 minutes)

### Monday: Quick Check
```bash
npm run license:check
```

### Every 2 weeks: Full Audit
```bash
npm run license:audit
npm run license:fix
```

### Monthly: Update Documentation
- Review and update `THIRD_PARTY_LICENSES.md`
- Check for new dependency licenses
- Verify all attributions are current

## Critical Rules to Follow

### ✅ ALWAYS ALLOWED
- MIT License
- Apache-2.0 License
- ISC License
- BSD 2-Clause/3-Clause

### 🚫 NEVER ALLOWED
- GPL (any version)
- AGPL (any version)
- LGPL (any version)
- Any license requiring source code disclosure

### ❓ REQUIRES APPROVAL
- Unlicense/Public Domain
- Any license not in approved list
- Complex dual licenses

## Before Adding New Dependencies

Run this command BEFORE installing:

```bash
# Check license of new package
npm info <package-name> license

# Example
npm info react license
# Should show: MIT
```

If license is not MIT, Apache-2.0, ISC, or BSD:
1. **STOP** - Do not install
2. Find alternative with approved license
3. If no alternative exists, get legal approval first

## Emergency Procedures

### If Prohibited License Detected

1. **IMMEDIATELY** remove the dependency:
   ```bash
   npm uninstall <package-name>
   ```

2. **FIND** approved alternative:
   ```bash
   npm search <functionality> --parseable | head -20
   # Check licenses of alternatives
   ```

3. **INSTALL** safe replacement:
   ```bash
   npm install <safe-alternative>
   npm run license:check
   ```

### If Attribution Missing

1. **ADD** to `THIRD_PARTY_LICENSES.md`:
   - Package name and version
   - License type
   - Copyright notice

2. **RUN** auto-fix:
   ```bash
   npm run license:fix
   ```

3. **VERIFY** compliance:
   ```bash
   npm run license:check
   ```

## Success Checklist

After completing setup, verify:

- [ ] All tools installed and working
- [ ] License scan passes with zero issues
- [ ] Attribution file is complete
- [ ] Team understands approved/prohibited licenses
- [ ] Automated checking integrated into workflow

## Quick Commands Reference

```bash
# Essential commands for daily use
npm run license:check        # Quick compliance check
npm run license:scan        # Scan only approved licenses
npm run license:audit       # Full audit with report
npm run license:fix         # Auto-fix attribution issues

# Emergency commands
npx license-checker --failOn 'GPL'    # Fail if GPL found
npx license-checker --excludePrivatePackages  # Skip private packages
npm info <package> license    # Check specific package license
```

## Getting Help

**Technical Issues**: Use Claude Code for implementation help  
**Legal Questions**: Consult with IP attorney  
**Process Questions**: Contact jake@intcreative.co

## Next Steps After Setup

1. **Schedule** monthly compliance reviews
2. **Train** any team members on procedures
3. **Document** approved dependency list
4. **Set up** automated scanning in CI/CD (if applicable)

---

**REMINDER**: License compliance is not optional. Failure to properly attribute open source software can result in legal action. When in doubt, choose the more conservative approach and seek legal counsel.

**Setup Time**: ~15 minutes  
**Monthly Maintenance**: ~10 minutes  
**Legal Protection**: Priceless