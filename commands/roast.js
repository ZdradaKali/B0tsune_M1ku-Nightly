const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs")
exports.run = async (client, message, args) => {
    let user = message.mentions.users.first();
    if (message.mentions.users === message.author.username) return message.reply('Vous ne pouvez pas vous clasher vous-même');
    if (message.mentions.users.size < 1) return message.reply('Vous devez mentionner quelqu\'un à clasher.')
    var roast = [
    "es-tu né sur l'autoroute? C'est là que la plupart des accidents se produisent",
    "j’allais te regarder d’un mauvais oeil... mais je vois que tu en as déjà un",
    "tu te souviens quand j'ai demandé ton avis? Moi non plus",
    "tout le monde a le droit d'être stupide de temps en temps, mais tu abuses vraiment du privilège",
    "j’essaie de voir les choses de ton point de vue, mais je ne peux pas mettre ma tête aussi loin dans mon cul",
    "je n’ai jamais vu un gros comme toi courir aussi vite depuis que le Nutella est en vente pour la première fois",
    "deux erreurs ne font pas un bien, prends tes parents comme exemple",
    "en te regardant, je comprends maintenant pourquoi certains animaux mangent leur progéniture",
    "est-ce que le temps passe vraiment quand tu baise, ou était-ce juste une minute après tout ?",
    "tu devrais aller faire ça demain. Oh, attends, ça ne fait rien, tu as déjà fait assez d'erreurs pour aujourd'hui",
    "c'est pourquoi tu n'as pas de belles choses",
    "mon professeur m'a dit d'effacer les erreurs, je vais avoir besoin d'une gomme plus grosse",
    "ton QI est inférieur à la taille de ta bite",
    "t’es toujours aussi con ou tu te la joues quand je suis là ?",
    "il y a des gens remarquablement stupides dans ce monde. Merci de m’aider à comprendre cela",
    "je pourrais manger un bol de soupe alphabet et chier une déclaration plus intelligente que tout ce que tu viens de dire",
    "tu es aussi utile qu'une porte moustiquaire sur un sous-marin",
    "tu m'apportes toujours tellement de joie quand tu te barres",
    "la stupidité n'est pas un crime, alors n'hésites pas",
    "si le rire est le meilleur remède, ton visage doit guérir le monde",
    "on dirait que ton visage a pris feu et que quelqu'un a essayé de l'éteindre avec un marteau",
    "les scientifiques disent que l'univers est composé de neutrons, de protons et d'électrons. Ils ont oublié de mentionner les cons comme toi",
    "tu es si gros que tu pourrais vendre de l'ombre",
    "ton arbre généalogique doit être un cactus parce que tout le monde dessus est un connard",
    "tu ne seras jamais l'homme que ta mère est",
    "ce n’est pas parce que tu as un cul que tu dois agir comme tel",
    "quelle position sexuelle produit les enfants les plus laids? Demande à ta mère, elle le sait",
    "si j'avais un visage comme le tien, je poursuivrais mes parents en justice",
    "le zoo a appelé. Ils se demandent comment tu es sorti de ta cage?",
    "hé, tu as quelque chose sur le menton... non, le 3ème en bas",
    "aww, c'est tellement mignon quand tu essaies de parler de choses que tu ne comprends pas",
    "tu es la preuve que l'évolution peut aller en sens inverse",
    "les cerveaux ne sont pas tout. Dans ton cas, ils ne sont rien",
    "tu es si laid quand tu regardes dans le miroir, ton reflet regarde ailleurs",
    "je suis désolé de ne pas avoir compris ça - je ne parle pas l'idiot",
    "il vaut mieux laisser quelqu'un penser que tu es stupide qu'ouvrir la bouche et le prouver",
    "es-tu né si stupide ou as-tu pris des leçons?",
    "tu es une personne si belle, intelligente, merveilleuse. Oh je suis désolé, je pensais que nous avions une compétition de mensonge",
    "t’en as pas marre de maquiller deux visages tous les matins ?",
    "hé, je suis plus droit que le poteau sur lequel ta mère danse",
    "si la laideur était mesurée en briques, tu serais la Grande Muraille de Chine",
    "je pensais t'avoir dit au revoir ce matin quand j'ai tiré la chasse d'eau",
    "si tu essayes d’améliorer le monde, tu devrais commencer par toi-même. Rien n’a besoin de plus d’aide que toi",
    "les zombies cherchent des cerveaux. Ne t'inquiète pas. Tu es en sécurité",
    "répandre des rumeurs ? Au moins, tu as trouvé un passe-temps pour répandre autre chose que tes jambes",
    "je te dirais bien de manger de la merde mais ce serait du cannibalisme",
    "si tu exprimais ton esprit, tu serais sans voix",
    "je peux réparer ma laideur avec de la chirurgie plastique mais toi d’un autre côté tu resteras stupide pour toujours",
    "agir comme une bite ne rendra pas la tienne plus grosse",
    "si j'avais voulu entendre un trou du cul, j'aurais pété",
    "les roses sont rouges. Les violettes sont bleues. Dieu nous a fait beaux. Qu'est-ce qui t'es arrivé?",
    "tu me rappelles un penny: deux visages et aucune valeur !",
    "j’ai rencontré quelques connards dans mon temps mais toi mon ami, tu es le putain de cactus",
    "je te giflerais bien, mais ce serait de la maltraitance animale",
    "parler de mes défauts ne fera pas diminuer les tiens",
    "je sais que je parle comme un idiot. Je dois le faire, sinon tu ne me comprendrais pas",
    "tu es tellement con, ton cerveau est mort de solitude",
    "tu ne devrais pas laisser ton esprit vagabonder... Il est trop petit pour être autonome",
    "je ne sais pas ce qui te rend si bête, mais ça marche",
    "tu devrais mettre la couche sur ta bouche, c'est là que la merde sort",
    "pourrais-tu partir s'il te plaît, je suis allergique aux connards",
    "j’aimerais avoir un Q.I plus bas, peut-être qu’alors je pourrais profiter de ta compagnie",
    "je te répondrais bien mais la vie est trop courte, tout comme ta bite",
    "les miroirs ne mentent pas. Heureusement pour toi, ils ne peuvent pas rire non plus",
    "j'avais raison, il n'y a pas d'humain dans ce channel",
    "tu as un visage que même une mère ne pourrait aimer...",
    "tu sais ce que je trouverais si je cherchais dans le dictionnaire une photo de toi?",
    "tu fais passer les gars de Jackass pour Einstein ...",
    "je voudrais te gifler mais je ne veux pas rendre ton visage mieux",
    "désolé, je ne peux pas mettre de petits objets dans ma bouche ou je vais m'étouffer",
    "tu devrais porter un préservatif sur la tête, si tu veux être une bite, tu pourrais aussi bien t'habiller comme tel",
    "as-tu fait du shopping récemment? Ils vendent des vies au centre commercial, tu devrais en obtenir une"
]
    const roasts = roast[Math.floor(Math.random() * roast.length)];
    const embed = new Discord.RichEmbed()
        .setColor(0x7700cf)
        .setDescription(user.username + ", " + roasts);
    message.channel.send({embed})
  }