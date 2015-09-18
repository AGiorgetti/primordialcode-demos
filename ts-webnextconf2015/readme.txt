-----------------------
Setup:

Install node: http://www.nodejs.org

Install tsd: npm install tsd -g

npm install

tsd install


-----------------------
Update definitions:

tsd update -s -o
tsd rebundle

ncu --upgradeAll
npm install

-----------------------
Purge global caches:

tsd purge