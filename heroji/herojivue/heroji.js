var vue = new Vue({
    el:'#app',
    data:{
        selected:null,
        newDesc:'',
        komentari:[],
        heroes: [
            {   title:'Iron Man',imgSrc:'https://www.hyundai.news/fileadmin/eu/models/20180827_6_hyundai_kona_features_that_will_make_you_feel_like_iron_man/kona-iron-man-video.jpg',description:'Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in Phase One of the MCU. It grossed over $585 million on its $140 million budget, becoming the eighth-highest grossing film of 2008. The film was praised by critics for its acting particularly Downey', komentari:[],  },
            {  title:'Spider-Man',
            imgSrc:'https://www.tehix.hr/wp-content/uploads/2019/07/Spider-Man-Far-From-Home-RECENZIJA-tehix.jpg',
            description:'Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in Phase One of the MCU. It grossed over $585 million on its $140 million budget, becoming the eighth-highest grossing film of 2008. The film was praised by critics for its acting particularly Downey', komentari:[],  },
            { title:'Hulk',
            imgSrc:'https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png',
            description:'Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in Phase One of the MCU. It grossed over $585 million on its $140 million budget, becoming the eighth-highest grossing film of 2008. The film was praised by critics for its acting particularly Downey', komentari:[], },
            { title:'Thor',
            imgSrc:'https://flxt.tmsimg.com/assets/p7989358_p_v10_af.jpg',
            description:'Iron Man premiered in Sydney on April 14, 2008, and was released in the United States on May 2, as the first film in Phase One of the MCU. It grossed over $585 million on its $140 million budget, becoming the eighth-highest grossing film of 2008. The film was praised by critics for its acting particularly Downey',komentari:[],  }
        ],
       
       
    
    },
    methods:{
        show(hero){
            this.selected = hero
        },
        comment(selected){
            selected.komentari.push(this.newDesc)
            this.newDesc = ''
        },
        dlt(index){
            this.heroes.splice(index,1)
        }
    }
});