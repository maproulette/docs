# Troubleshooting

If you are experiencing issues with the local install, here are some steps to troubleshoot

## 1. Resinstall Python and node-gyp

'''
npm install --global --python=/Library/Frameworks/Python.framework/Versions/3.12/bin/python3 node-gyp@latest
'''

## 2. Install node-gyp globally within the npm package environment

'''
npm explore npm -g -- npm install node-gyp@latest
'''

## 3. Update npm

'''
npm install -g npm@latest
'''

## 4. Install deasync globally

'''
npm install -g deasync
'''

## 5. Use latest node

'''
nvm use --lts
'''

delete node modules and reinstall
