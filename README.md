# table2div
h2. Javascript based responsive tables
Example: http://matdave.github.io/table2div/

h3. Convert all tables:
```
$('table').each(function(){
   table2div(this);
});
```

h3. Convert specific table:
```
table2div($('.specific-table'));
```
