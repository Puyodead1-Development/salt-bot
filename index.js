const Discord = require("discord.js");
const fs = require("fs");
let config = require("./config.json");
let enabled = true;
const client = new Discord.Client();

let despacito = [
  "Ay",
  "Fonsi",
  "DY ",
  "Oh",
  "Oh no,, oh no",
  "Oh yeah",
  "Diridiri, dirididi Daddy ",
  "Go",
  "Sí, sabes que ya llevo un rato mirándote ",
  "Tengo que bailar contigo hoy (DY) ",
  "Vi que tu mirada ya estaba llamándome ",
  "Muéstrame el camino que yo voy (Oh)",
  "Tú, tú eres el imán y yo soy el metal ",
  "Me voy acercando y voy armando el plan ",
  "Solo con pensarlo se acelera el pulso (Oh yeah)",
  "Ya, ya me está gustando más de lo normal ",
  "Todos mis sentidos van pidiendo más ",
  "Esto hay que tomarlo sin ningún apuro",
  "Despacito ",
  "Quiero respirar tu cuello despacito ",
  "Deja que te diga cosas al oído ",
  "Para que te acuerdes si no estás conmigo",
  "Despacito ",
  "Quiero desnudarte a besos despacito ",
  "Firmo en las paredes de tu laberinto ",
  "Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)",
  "(Sube, sube)",
  "Quiero ver bailar tu pelo ",
  "Quiero ser tu ritmo ",
  "Que le enseñes a mi boca ",
  "Tus lugares favoritos (favoritos, favoritos baby)",
  "Déjame sobrepasar tus zonas de peligro ",
  "Hasta provocar tus gritos ",
  "Y que olvides tu apellido (Diridiri, dirididi Daddy)",
  "Si te pido un beso ven dámelo ",
  "Yo sé que estás pensándolo ",
  "Llevo tiempo intentándolo ",
  "Mami, esto es dando y dándolo ",
  "Sabes que tu corazón conmigo te hace bom, bom ",
  "Sabes que esa beba está buscando de mi bom, bom ",
  "Ven prueba de mi boca para ver cómo te sabe ",
  "Quiero, quiero, quiero ver cuánto amor a ti te cabe ",
  "Yo no tengo prisa, yo me quiero dar el viaje ",
  "Empecemos lento, después salvaje",
  "Pasito a pasito, suave suavecito ",
  "Nos vamos pegando poquito a poquito ",
  "Cuando tú me besas con esa destreza ",
  "Veo que eres malicia con delicadeza",
  "Pasito a pasito, suave suavecito ",
  "Nos vamos pegando, poquito a poquito ",
  "Y es que esa belleza es un rompecabezas ",
  "Pero pa montarlo aquí tengo la pieza",
  "Despacito ",
  "Quiero respirar tu cuello despacito ",
  "Deja que te diga cosas al oído ",
  "Para que te acuerdes si no estás conmigo",
  "Despacito ",
  "Quiero desnudarte a besos despacito ",
  "Firmo en las paredes de tu laberinto ",
  "Y hacer de tu cuerpo todo un manuscrito (sube, sube, sube)",
  "(Sube, sube)",
  "Quiero ver bailar tu pelo ",
  "Quiero ser tu ritmo ",
  "Que le enseñes a mi boca ",
  "Tus lugares favoritos (favoritos, favoritos baby)",
  "Déjame sobrepasar tus zonas de peligro ",
  "Hasta provocar tus gritos ",
  "Y que olvides tu apellido",
  "Despacito ",
  "Vamos a hacerlo en una playa en Puerto Rico",
  "Hasta que las olas griten ¡ay, bendito! ",
  "Para que mi sello se quede contigo",
  "Pasito a pasito, suave suavecito ",
  "Nos vamos pegando, poquito a poquito ",
  "Que le enseñes a mi boca ",
  "Tus lugares favoritos (favoritos, favoritos baby)",
  "Pasito a pasito, suave suavecito ",
  "Nos vamos pegando, poquito a poquito ",
  "Hasta provocar tus gritos ",
  "Y que olvides tu apellido (DY)",
  "Despacito"
];

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("with SALT!", { type: "PLAYING" });
});

client.on("message", msg => {
  if (msg.content.toLowerCase() === "give me salt daddy") {
    if (msg.guild.members.get(msg.author.id).permissions.has("ADMINISTRATOR")) {
      if (config.enabled) {
        enabled = false;
        config.enabled = false;
      } else {
        enabled = true;
        config.enabled = true;
      }

      fs.writeFile("./config.json", JSON.stringify(config), function(err) {
        if (err) return console.log(err);
      });
      return msg.channel.send("Salt bot is now set to: " + enabled);
    } else {
      msg.reply("ARE YOU TRYING TO DISABLE THE SALT! SHAME ON YOU SALTHATER!");
      let saltHater = msg.guild.roles.find(`name`, "SaltHater");
      if (!saltHater) {
        try {
          saltHater = msg.guild.createRole({
            name: "SaltHater",
            color: "#00FF00",
            permissions: []
          });
          msg.channel.send("Created salthater role!");
        } catch (e) {
          console.log(e.stack);
        }
      }
      try {
        msg.guild.member(msg.author.id).addRole(saltHater.id);
      } catch (err) {
        msg.channel.send("ERROR: " + err);
      }
    }
  }
  if (config.enabled) {
    if (msg.author.bot) return;
    if (msg.channel.id === "507752121290981376") return;
    if (msg.content.toLowerCase() === "salt") return msg.channel.send("YES");
    if (msg.content.toLowerCase().includes("pepper")) {
      msg.channel.send("NO, SALT!!!!!");
      let saltHater = msg.guild.roles.find(`name`, "SaltHater");
      if (!saltHater) {
        try {
          saltHater = msg.guild.createRole({
            name: "SaltHater",
            color: "#00FF00",
            permissions: []
          });
          msg.channel.send("Created salthater role!");
        } catch (e) {
          console.log(e.stack);
        }
      }
      try {
        msg.guild.member(msg.author.id).addRole(saltHater.id);
      } catch (err) {
        msg.channel.send("ERROR: " + err);
      }
      return msg.channel.send(`${msg.author}, ENJOY THE SALTHATER ROLE!`);
    }
    if (msg.content.toLowerCase().includes("fuck salt")) {
      let saltHater = msg.guild.roles.find(`name`, "SaltHater");
      if (!saltHater) {
        try {
          saltHater = msg.guild.createRole({
            name: "SaltHater",
            color: "#00FF00",
            permissions: []
          });
          msg.channel.send("Created salthater role!");
        } catch (e) {
          console.log(e.stack);
        }
      }
      try {
        msg.guild.member(msg.author.id).addRole(saltHater.id);
      } catch (err) {
        msg.channel.send("ERROR: " + err);
      }
      return msg.channel.send(
        `NO ${msg.author}, ENJOY THE SALTHATER ROLE FUCKER!`
      );
    }
    if (msg.content.toLowerCase().includes("i love salt")) {
      let saltHater = msg.guild.roles.find(`name`, "SaltHater");
      if (!msg.guild.member(msg.author).roles.has(saltHater.id)) {
        return msg.channel.send("You already love salt!");
      }
      msg.guild.member(msg.author).removeRole(saltHater.id);
      return msg.channel.send("We have converted you!");
    }
    if (msg.content.toLowerCase().includes("despacito")) {
      var randomNumber = Math.floor(Math.random() * despacito.length);
      return msg.channel.send(despacito[randomNumber]);
    }
    msg.channel.send("salt");
  }
});

client.login(config.token);
