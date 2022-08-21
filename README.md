# TestProject
#I am not able to upload node_modules folder
To run the test pleaase use below commands:
npx wdio run wdio.conf.js

if does not have matching chrome browser version please add this in wdio.conf.js and run

        logFileName: 'wdio-chromedriver.log', // default
        outputDir: 'driver-logs', // overwrites the config.outputDir
        args: ['--silent'],
        chromedriverCustomPath: "/Users/{username}/Downloads/chromedriver" // pass the local chrome driver exe path
        
        
we just need to pass 'services: ['chromedriver']' in wdio.conf.js if we have matching chrome driver version in our local machine.
