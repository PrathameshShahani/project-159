AFRAME.registerComponent("info-banner",{
    schema:{
        itemId:{type:"string",default:""}
    },

    createBanner:function(){
        postersInfo = {
            superman:{
                banner_url:"./assets/posters/superman-banner.jpg" ,
                title:"Superman",
                released_year:"1983",
                description:"Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).[1] Superman has been adapted to a number of other media, which includes radio serials, novels, films, television shows, and theater.Superman was born on the fictional planet Krypton and was named Kal-El. As a baby, his parents sent him to Earth in a small spaceship moments before Krypton was destroyed in a natural cataclysm. His ship landed in the American countryside, near the fictional town of Smallville. He was found and adopted by farmers Jonathan and Martha Kent, who named him Clark Kent. Clark developed various superhuman abilities, such as incredible strength and impervious skin. His adoptive parents advised him to use his abilities for the benefit of humanity, and he decided to fight crime. To protect his personal life, he changes into a colorful costume and uses the alias (Superman) when fighting crime. Clark resides in the fictional American city of Metropolis, where he works as a journalist for the Daily Planet. Superman's supporting characters include his love interest and fellow journalist Lois Lane, Daily Planet photographer Jimmy Olsen and editor-in-chief Perry White, and his enemies include Brainiac, General Zod, Darkseid, and his archenemy Lex Luthor."
            },

            spiderman:{
                banner_url: "./assets/posters/spiderman-banner.png",
                title:"Spiderman",
                released_year:"1962",
                description:"Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books. He has since been featured in films, television shows, video games, and plays. Spider-Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker died in a plane crash. Lee and Ditko had the character deal with the struggles of adolescence and financial issues and gave him many supporting characters, such as Flash Thompson, J. Jonah Jameson, and Harry Osborn; romantic interests Gwen Stacy, Mary Jane Watson, and the Black Cat; and foes such as Doctor Octopus, the Green Goblin, and Venom. In his origin story, he gets spider-related abilities from a bite from a radioactive spider; these include clinging to surfaces, superhuman strength and agility, and detecting danger with his spider-sense. He also builds wrist-mounted (web-shooter) devices that shoot artificial spider webs of his own design."
            },

            "captain-aero":{
                banner_url: "./assets/posters/captain-aero-banner.jpg",
                title:"Captain Aero",
                released_year:"1942",
                description:"Captain Aero's first adventure was written by Allen Ulmer and illustrated by Ray Willner.[3] Captain Aero is a Flying ace for the US Army, who patrols the skies with his little Chinese pal, Chop Suey. In his first adventure, he tests out an experimental P-60 plane and escorts a flight of Canadian flyers taking planes to England, as America and not yet entered World War II. According to Jess Nevins' Encyclopedia of Golden Age Superheroes, he fights Yellow Perils like the Tibetan Black Lama, evil German pilots like the Black Baron, and death-ray-wielding mad scientists."
            },

            "outer-space":{
                banner_url: "./assets/posters/outer-space-banner.jpg",
                title:"Outer Space",
                released_year:"1952",
                description:"This is the most vital subject of our times! Every American Man... and Woman... Child... owes it to his country and himself, to read this issue!!"
            },
        }
    
        const { itemId } = this.data;

        const fadeBackgroundEl = document.querySelector("#fadeBackground");
    
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("id", `${itemId}-banner`);
    
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.9,
          height: 1,
        });
    
        entityEl.setAttribute("material", { color: "#000" });
        entityEl.setAttribute("position", { x: 0, y: 0.1, z: -1 });
    
        const item = postersInfo[itemId];
    
        const imageEl = this.createImageEl(item);
        const titleEl = this.createTitleEl(item);
        const descriptionEl = this.createDescriptionEl(item);
    
        entityEl.appendChild(imageEl);
        entityEl.appendChild(titleEl);
        entityEl.appendChild(descriptionEl);
    
        fadeBackgroundEl.appendChild(entityEl);
      },
      createImageEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
          primitive: "plane",
          width: 0.85,
          height: 0.4,
        });
        entityEl.setAttribute("material", { src: item.banner_url });
        entityEl.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
        return entityEl;
      },
      createTitleEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 1.2,
          height: 2,
          color: "#fff",
          value: `${item.title} (${item.released_year})`,
        });
        entityEl.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
        return entityEl;
      },
      createDescriptionEl: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("text", {
          shader: "msdf",
          anchor: "left",
          font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
          width: 0.75,
          height: 2,
          color: "#fff",
          wrapCount: "40",
          value: item.description,
        });
        entityEl.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
        return entityEl;
      },
    });