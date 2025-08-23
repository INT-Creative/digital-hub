#!/bin/bash

# INT Creative Git & GitHub Setup Script for Pop!_OS
# This script configures Git and GitHub to match your Mac setup

echo "🚀 Setting up Git & GitHub for INT Creative on Pop!_OS..."

# Configure Git globally
echo "📧 Configuring Git with company email..."
git config --global user.name "Jacob Internicola"
git config --global user.email "jake@intcreative.co"

# Set default branch to main
git config --global init.defaultBranch main

# Configure Git settings for better workflow
git config --global pull.rebase false
git config --global core.editor "code --wait"

echo "✅ Git configured successfully!"
echo "   Name: $(git config --global user.name)"
echo "   Email: $(git config --global user.email)"

# SSH Key setup instructions
echo ""
echo "🔑 SSH Key Setup Instructions:"
echo "1. Generate SSH key:"
echo "   ssh-keygen -t ed25519 -C \"jake@intcreative.co\" -f ~/.ssh/id_ed25519"
echo ""
echo "2. Add SSH key to ssh-agent:"
echo "   eval \"\$(ssh-agent -s)\""
echo "   ssh-add ~/.ssh/id_ed25519"
echo ""
echo "3. Copy public key to clipboard:"
echo "   cat ~/.ssh/id_ed25519.pub | xclip -selection clipboard"
echo "   # Or manually copy from: cat ~/.ssh/id_ed25519.pub"
echo ""
echo "4. Add the key to GitHub:"
echo "   - Go to https://github.com/settings/keys"
echo "   - Click 'New SSH key'"
echo "   - Paste your public key"
echo ""

# Create SSH config
echo "📝 Creating SSH config..."
mkdir -p ~/.ssh
cat > ~/.ssh/config << 'EOF'
Host github.com
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519
  AddKeysToAgent yes
EOF

echo "✅ SSH config created!"

# GitHub CLI installation
echo ""
echo "📦 Installing GitHub CLI..."
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI already installed"
else
    echo "Installing GitHub CLI..."
    sudo apt update
    sudo apt install gh -y
fi

echo ""
echo "🔐 GitHub CLI Authentication:"
echo "Run: gh auth login"
echo "Choose:"
echo "  - GitHub.com"
echo "  - HTTPS"
echo "  - Yes (authenticate with web browser)"
echo "  - Login with your intcreative-hub account"

# Test connections
echo ""
echo "🧪 Testing connections (after SSH key setup):"
echo "Test SSH: ssh -T git@github.com"
echo "Test GitHub CLI: gh auth status"

echo ""
echo "✅ Setup complete! Make sure to:"
echo "1. Generate and add SSH key to GitHub"
echo "2. Run 'gh auth login' to authenticate GitHub CLI"
echo "3. Test connections with the commands above"
echo ""
echo "📁 Clone intcreative-hub repository:"
echo "git clone git@github.com:intcreative-hub/intcreative-hub.git"