# gRPC Service
This project includes both server and client for a simple note service which uses gRPC framework.

## Run Server
Runing the command below will start the server in localhost with the port 50051.

    npm run start
    
## Make Request
Just run one of the scripts at `/client` dir.

    node client/get-note.js

## Add New Service
gRPC services are defined as .proto files in `/protos` dir. You can add new services under this dir. They are all exported in `/protos/index.js`

To register handlers for the gRPC service methods defined in your `.proto` file, you should add your handlers under `/server/handlers/` dir(see note.js for guiding) and export your handlers in `/server/handlers/index.js`

Finally, you should import your handlers in `/server/index.js` and call addService method on server object like below:

    server.addService(yournewservice.YourNewService.service, yourNewHandlers);

## TODO
Insert-Update-Delete operations are hardcoded for now. To make it dynamic, note parameters will be given as command args when calling these operations.
For example;

    insert-note --title <title> --content <content>
