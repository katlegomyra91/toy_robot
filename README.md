# Katlego's Toy Robot
https://mryumteam.notion.site/Toy-Robot-Simulation-Coding-Challenge-a71cc5f6eb8b4be4af3b4ebd6e7a9eda

## How to run this project?

Please, use Node.js v20.2 and install `pnpm` as package manager.

```shell
$ pnpm install
$ npm run build
$ npm run serve
```

### Scenario A
```shell
PLACE 0,0,NORTH
MOVE
REPORT
```
Output: `0,1,NORTH`

### Scenario B
```shell
PLACE 0,0,NORTH
LEFT
REPORT
```
Output: `0,0,WEST`

**For development**, run the following command in a separate terminal.

```shell
$ npm run dev
```

To test run the following command.

```shell
$ npm run test
```

## Improvements
- [ ] add exceptions, for better error handling
- [ ] Find better way to manage directions
- [ ] Improve place function in Robot class
- [ ] Add RESIZE command, to allow users to define the size of the table
- [ ] Add QUIT command, to end program