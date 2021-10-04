function teamProfileHtml(team) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Site | ${team.name}</title>
      <!-- Bootstrap, CSS -->
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    
      <style>
        a {
          text-decoration: none;
        }
    
        table {
          table-layout: fixed;
        }
    
        .cw-10 {
          width: 10%;
        }
    
        .cw-30 {
          width: 30%;
        }
      </style>
    </head>
    
    <body>
      <header class="container-fluid p-5 bg-primary">
        <h1 class="text-center text-light">${team.name}</h1>
      </header>
    
      <main class="">
        <div class="container mt-5">
          <h3>Manager</h3>
          <table class="table table-striped">
            <colgroup>
              <col class="cw-10">
              <col class="cw-30">
              <col class="cw-30">
              <col class="cw-30">
            </colgroup>
            <thead>
              <tr class="">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Office</th>
              </tr>
            </thead>
            <tbody>
              ${team.managerRows}
            </tbody>
          </table>
        </div>
    
        <div class="container mt-5">
          <h3>Engineers</h3>
          <table class="table table-striped">
            <colgroup>
              <col class="cw-10">
              <col class="cw-30">
              <col class="cw-30">
              <col class="cw-30">
            </colgroup>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>GitHub</th>
              </tr>
            </thead>
            <tbody>
              ${team.engineerRows}
            </tbody>
          </table>
        </div>
    
        <div class="container mt-5">
          <h3>Interns</h3>
          <table class="table table-striped">
            <colgroup>
              <col class="cw-10">
              <col class="cw-30">
              <col class="cw-30">
              <col class="cw-30">
            </colgroup>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>School</th>
              </tr>
            </thead>
            <tbody>
              ${team.internRows}
            </tbody>
          </table>
        </div>
    
    
      </main>
    </body>
    
    </html>
    `.trim();
  }
  
  module.exports = teamProfileHtml;