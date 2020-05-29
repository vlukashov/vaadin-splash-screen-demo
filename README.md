[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/vlukashov/vaadin-splash-screen-demo/tree/v14)

# Vaadin 14+ Splash Screen demo

This app shows a splash screen until the first application view is loaded.
The splash screen has a simple CSS spinner, taken from https://tobiasahlin.com/spinkit/. 
The HTML / CSS for it is inlined into the bootstrap page through the [`PageConfigurator.configurePage()`](https://vaadin.com/docs/v14/flow/advanced/tutorial-bootstrap.html#pageconfigurator) API in the `MainView` class.
Inlining is important for splash screens because you would want to show it ASAP, and loading separate CSS files adds time.
The code to hide the splash screen is executed through the `Page.executeJs()` API when the main view of the app loads (see the end of the `MainView` constructor).


See the [`master`](https://github.com/vlukashov/vaadin-splash-screen-demo) branch for a Vaadin 16 version.
The `v14` branch is Vaadin 14 (LTS).

## Running the Application
There are two ways to run the application :  using `mvn spring-boot:run` or by running the `Application` class directly from your IDE.

You can use any IDE of your preference,but we suggest Eclipse or Intellij IDEA.
Below are the configuration details to start the project using a `spring-boot:run` command. Both Eclipse and Intellij IDEA are covered.

#### Eclipse
- Right click on a project folder and select `Run As` --> `Maven build..` . After that a configuration window is opened.
- In the window set the value of the **Goals** field to `spring-boot:run` 
- You can optionally select `Skip tests` checkbox
- All the other settings can be left to default

Once configurations are set clicking `Run` will start the application

#### Intellij IDEA
- On the right side of the window, select Maven --> Plugins--> `spring-boot` --> `spring-boot:run` goal
- Optionally, you can disable tests by clicking on a `Skip Tests mode` blue button.

Clicking on the green run button will start the application.

After the application has started, you can view your it at http://localhost:8080/ in your browser.


If you want to run the application locally in the production mode, use `spring-boot:run -Pproduction` command instead.
### Running Integration Tests

Integration tests are implemented using [Vaadin TestBench](https://vaadin.com/testbench). The tests take a few minutes to run and are therefore included in a separate Maven profile. To run the tests using Google Chrome, execute

`mvn verify -Pit`

and make sure you have a valid TestBench license installed. If the tests fail because of an old Chrome Driver or you want to use a different browser, you'll need to update the `webdrivers.xml` file in the project root.

Profile `it` adds the following parameters to run integration tests:
```sh
-Dwebdriver.chrome.driver=path_to_driver
-Dcom.vaadin.testbench.Parameters.runLocally=chrome
```

If you would like to run a separate test make sure you have added these parameters to VM Options of JUnit run configuration

## Project overview

Project follow the Maven's [standard directory layout structure](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html):
- Under the `srs/main/java` are located Application sources
   - `Application.java` is a runnable Java application class and a starting point
   - `GreetService.java` is a  Spring service class
   - `MainView.java` is a default view and entry point of the application
- Under the `srs/test` are located test files
- `src/main/resources` contains configuration files and static resources
- The `frontend` directory in the root folder contains client-side dependencies and resource files
   - All CSS styles used by the application are located under the root directory `frontend/styles`    
   - Templates would be stored under the `frontend/src`


## More Information and Next Steps

- Vaadin Basics [https://vaadin.com/docs](https://vaadin.com/docs)
- More components at [https://vaadin.com/components](https://vaadin.com/components) and [https://vaadin.com/directory](https://vaadin.com/directory)
- Download this and other examples at [https://vaadin.com/start](https://vaadin.com/start)
- Using Vaadin and Spring [https://vaadin.com/docs/v14/flow/spring/tutorial-spring-basic.html](https://vaadin.com/docs/v14/flow/spring/tutorial-spring-basic.html) article
- Join discussion and ask a question at [https://vaadin.com/forum](https://vaadin.com/forum)


## Notes

If you run application from a command line, remember to prepend a `mvn` to the command.
