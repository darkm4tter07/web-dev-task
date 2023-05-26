var mydata = [];

fetch('https://www.coursehubiitg.in/api/codingweek/contributions')
    .then(response => response.json())
    .then( data=>{

        data.forEach(item => {
            var name = item.name;
            var points = item.points;
            var avatar = item.avatar;

            mydata.push({
                name: name, 
                points: points,
                avatar: avatar
            });
        });

        console.log(mydata.length);
        mydata.sort((a,b)=>b.points - a.points );
        console.log(mydata[1].name);

        for(let i=0;i<3;i++){
            const row = mydata[i];
            const firstname = row.name.split(' ')[0];
            const score= row.points;
            const avatar= `url("${row.avatar}")`;
            const stylesheet = document.styleSheets[0];

            if(i==0){
                const rank1Div = document.querySelector('.toppers .rank2');
                const innerdiv= rank1Div.querySelector('.name2');
                
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                const rule = stylesheet.cssRules[5];
                rule.style.backgroundImage = avatar;
            }else if(i==1){
                const rank1Div = document.querySelector('.toppers .rank1');
                const innerdiv= rank1Div.querySelector('.name1');
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                const rule = stylesheet.cssRules[9];
                rule.style.backgroundImage = avatar;
            }else{
                const rank1Div = document.querySelector('.toppers .rank3');
                
                const innerdiv= rank1Div.querySelector('.name3');
                innerdiv.innerHTML= firstname + ' <sup>.</sup> ' + score;
                const rule = stylesheet.cssRules[13];
                rule.style.backgroundImage = avatar;
            }
            
        }

        for (let i = 3; i < mydata.length; i++) {
            const row = mydata[i];
            const firstname = row.name.split(' ')[0];
            const score= row.points;
            const avatar = `url("${row.avatar}")`;    

            const otherDiv = document.querySelector('.other');
            const newOthersDiv = document.createElement('div');
            newOthersDiv.classList.add('others');
            const noDiv = document.createElement('div');
            noDiv.classList.add('no');
            noDiv.textContent = i + 1;
          
            const circleDiv = document.createElement('div');
            circleDiv.classList.add('circle');
          
            const nameDiv = document.createElement('div');
            nameDiv.classList.add('name');
            nameDiv.textContent = firstname;
          
            const scoreDiv = document.createElement('div');
            scoreDiv.classList.add('score');
            scoreDiv.textContent = score;
          
            newOthersDiv.appendChild(noDiv);
            newOthersDiv.appendChild(circleDiv);
            newOthersDiv.appendChild(nameDiv);
            newOthersDiv.appendChild(scoreDiv);
            otherDiv.appendChild(newOthersDiv);

            //I'm adding css properties here because these data are dynamic and I don't know how to pass dynamic properties in stylesheet

            noDiv.style.marginTop = '8px';
            noDiv.style.fontFamily = 'Inter';
            noDiv.style.fontStyle = 'normal';
            noDiv.style.fontSize = '20px';
            noDiv.style.fontWeight= '400';
            noDiv.style.lineHeight= '39px';
            noDiv.style.color= 'black';
            noDiv.style.textAlign= 'center';
            noDiv.style.alignItems= 'center';
            noDiv.style.justifyContent= 'center';

            circleDiv.style.marginTop= '5px';
            circleDiv.style.backgroundImage= avatar;
            circleDiv.style.border= '2px solid #ffffff';
            circleDiv.style.borderRadius= '50%';
            circleDiv.style.width= '45px';
            circleDiv.style.height= '45px';
            circleDiv.style.backgroundPosition= 'center';
            circleDiv.style.backgroundSize = 'cover';

            nameDiv.style.margintop= '8px';
            nameDiv.style.fontFamily= 'Inter';
            nameDiv.style.fontStyle= 'normal';
            nameDiv.style.fontHeight= '400';
            nameDiv.style.fontSize= '20px';
            nameDiv.style.lineHeight= '39px';
            nameDiv.style.display= 'flex';
            nameDiv.style.justifyContent= 'center';
            nameDiv.style.placeSelf='center';

            scoreDiv.style.marginTop = '8px';
            scoreDiv.style.fontFamily= 'Inter';
            scoreDiv.style.fontStyle= 'normal';
            scoreDiv.style.fontWeight= '400';
            scoreDiv.style.fontSize= '20px';
            scoreDiv.style.lineHeight= '39px';
            scoreDiv.style.gridColumn= '5 / 6';
            
          }
          
        
    })
    .catch(error=>{
        console.log('Error', error);
    });



    
