# TestProject

#I am not able to upload node_modules folder

To run the test pleaase use below commands:
>> npx wdio run wdio.conf.js

if we do not have matching chrome browser version in local machine please add this in wdio.conf.js and run

        logFileName: 'wdio-chromedriver.log', // default
        outputDir: 'driver-logs', // overwrites the config.outputDir
        args: ['--silent'],
        chromedriverCustomPath: "/Users/{username}/Downloads/chromedriver" // pass the local chrome driver exe path
        
        
we just need to pass 'services: ['chromedriver']' in wdio.conf.js if we have matching chrome driver version in our local machine.

Regarding the issue :

>>> problem on the https://osa-web.tcg.co.uk/qatest page

organisationId is not passed in the path params of the end point. I have sent the screenshots by highlighting it. If we pass the organisationId , It will work

Bug title : News page is not loading due to organisationId issue in the path params of the end point

>>https://pro-fapi-osa.t-cg.co.uk/api/schools/4055/news?markAsRead=false
