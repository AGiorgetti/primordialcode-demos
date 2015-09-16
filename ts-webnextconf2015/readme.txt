-----------------------
Setup:

tsd install

npm install

-----------------------
Update definitions:

tsd update -s -o
tsd rebundle

ncu --upgradeAll
npm install

-----------------------
Purge global caches:

tsd purge