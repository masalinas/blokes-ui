# blokes-ui
Blokes UI

# to create the project execute the angular CLI command:
ng new blokes-ui

# install swagger generator version 3.0.4:
* download from https://github.com/swagger-api/swagger-codegen/archive/v3.0.4.tar.gz
* compile sources: mvn install to obtain ./swagger-codegen-3.0.4/modules/swagger-codegen-cli/target/swagger-codegen-cli.jar

# generate Angular 6 SDK services from OpenAPI url
java -jar swagger-codegen-cli.jar generate -i http://localhost:3000/openapi.json -l typescript-angular -o sdk

# copy sdk folder in angular project
mv sdk ./blokes-ui/src/app/shared/

# correct some mistakes in the sources generated
* import { Observable } from 'rxjs' in all services generated.
* add '}' character at the end of all services generated.