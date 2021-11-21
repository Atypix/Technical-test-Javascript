# Technical test Javascript

Command line interface in Node.js to filter or count a data dump.

## How to use

Make sure you have Node.js on your computer.

Download App from git.

```shell script

git clone https://github.com/Atypix/Technical-test-Javascript.git

```

Go to folder

```shell script

cd adeo

```

You must use a --filter or --count argument and only one is allowed!

### Filter Datas

Statement: only animals containing `ry` are displayed. The order should be kept intact.

```shell script

node app.js --filter=ry

[
   {
      name:  "Uzuzozne"
      people:  [
         {
            name:  "Lillie Abbott"
            animals:  [
               {
                  name:  "John Dory"
               }
            ]
         }
      ]
   }
   {
      name:  "Satanwi"
      people:  [
         {
            name:  "Anthony Bruno"
            animals:  [
               {
                  name:  "Oryx"
               }
            ]
         }
      ]
   }
]


```

### Count Datas

Statement: print the counts of People and Animals by counting the number of children and appending it in the name

```shell script

node app.js --count
[
   {
      name:  "Dillauti [5]"
      people:  [
         {
            name:  "Winifred Graham [6]"
            animals:  [
               {
                  name:  "Anoa"
               }
               {
                  name:  "Duck"
               }
               {
                  name:  "Narwhal"
               }
               {
                  name:  "Badger"
               }
               {
                  name:  "Cobra"
               }
               {
                  name:  "Crow"
               }
            ]
         }
      ...
...
]

```

## Javascript test framework: Mocha.

### Before you start tests

Make sure you have npm on your computer.

```shell script

npm install mocha

```

### Run tests

Go to the application folder.

```shell script

npm test

```






