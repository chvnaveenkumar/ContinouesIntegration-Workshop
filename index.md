# ContinouesIntegration-Workshop

* [Website](https://testingcigdp.herokuapp.com)
* [Code](https://bitbucket.org/professorcase/testing-ci)

## How to Add Continuous Integration to your Project.

1. Build a sample Node JS Appliction.
   [Sample NodeJS Application repo](https://bitbucket.org/professorcase/testing-ci)
2. Implement Continous Integration with Bitbucket Pipelines.
    
    2.1. Login into  bitbucket and Create new repository.
       
       ![Create Repo](/images/1CreateRepo.png)
       
    2.2. Maintain code in your bitbucket repository.
    
    2.3. Go to Pipelines by clicking on the corresponding menu item in the sidebar.
    
       ![Pipelines](/images/Pipelineswithmark.png)
    
    2.4. Choose a language template and configured via the bitbucket-pipelines.yml file.
        
        ![ChooseLanguage](/images/Template.png)
    
    2.5. The below example should have the command npm install.(Remove npm test because we are not testing here. if you have test cases you can use.)
    
       ![YMLCode](/images/4YmlCode.png)
    
    2.6. Finally do commit.
    
 3. Deploy this repository to Heroku via the Git interface.
    
    3.1. Login into Heroku and create new app.
    
    3.2. Set HEROKU_API_KEY and HEROKU_APP_NAME environment variables in the repo.( go to repo settings click on Environment Variable under piplines )
    
       ![YMLCode](/images/5EnvironmentVariables.png)
    
    3.3. Add below script to bitbucket-pipelines.yml in the repository.
    
    - script:
    
       - git push https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git HEAD
      
       ![YMLCode](/images/7Ymlfile.png)
    
    3.4. After adding script into bitbucket-pipelines.yml then do commit.
    
    3.5. Goto Pipelines then check the pipeline status. if it is green then application deployed successful. Red shows build failed then check your code and deploy.
      
       ![final](/images/8succes.png)

# Tutorial

https://www.atlassian.com/continuous-delivery/continuous-integration-tutorial







<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-127484904-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127484904-1');
</script>
