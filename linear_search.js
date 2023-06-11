<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      let v = 8;
      let arr = [1, 12, 30, 4, 5, 6, 7, 8, 9, 10];
      function sorted(arr) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] == v) {
            document.write(i);
          } else {
            count += 1;
          }
        }
      }
      sorted(arr);
    </script>
  </body>
</html>
