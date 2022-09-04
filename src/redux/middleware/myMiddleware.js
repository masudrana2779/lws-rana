// create my first middleware 
const myMiddleware = (stage) => (next) => (action) => {
    console.log(`state is ${JSON.stringify(stage.getState())}`);
    console.log(`action is ${JSON.stringify(action)}`)

    //pass action
    return next(action)
    }

    export default myMiddleware