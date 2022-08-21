# TestProject

#I am not able to upload node_modules folder

To run the test pleaase use below commands:
>> npx wdio run wdio.conf.js


Please add below in **wdio.conf.js** if you dont have matching chrome browser version in local otherwise **'services: ['chromedriver']'** is enough to run the tests.

        logFileName: 'wdio-chromedriver.log', // default
        outputDir: 'driver-logs', // overwrites the config.outputDir
        args: ['--silent'],
        chromedriverCustomPath: "/Users/{username}/Downloads/chromedriver" // pass the local chrome driver exe path
        

>>> problem on the https://osa-web.tcg.co.uk/qatest page

organisationId is not passed in the path params of the end point hence status code-404 is returned. I have sent the screenshots by highlighting it. If we pass the organisationId , It will work

Bug title : News page is not loading due to organisationId issue in the path params of the end point

>> https://pro-fapi-osa.t-cg.co.uk/api/schools/4055/news?markAsRead=false
>> https://pro-fapi-osa.t-cg.co.uk/api/schools/organisationId/news?markAsRead=false

