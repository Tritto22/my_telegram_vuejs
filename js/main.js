const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Angelo',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '11/09/2001 16:15:22',
                        message: 'Ciao, come stai?',
                        status: 'sent'
                    },
                    {
                        date: '11/09/2001 16:20:03',
                        message: 'Hai risolto quella faccenda?',
                        status: 'sent'
                    },
                    {
                        date: '11/09/2001 18:30:55',
                        message: 'Non male dai, alla fine per fortuna è andato tutto bene.',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Marco',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '15/06/2022 13:15:00',
                        message: 'Ti svegliato presto stamattina?',
                        status: 'sent'
                    },
                    {
                        date: '16/06/2022 14:20:03',
                        message: 'Si, ieri ho fatto tardissimo',
                        status: 'received'
                    },
                    {
                        date: '16/06/2022 15:30:55',
                        message: 'Ma come fai a dormire tutto quel tempo?!',
                        status: 'sent'
                    },
                    {
                        date: '16/06/2022 15:32:55',
                        message: 'Questione di abitudine!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Silvia',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '22/01/2023 16:15:22',
                        message: 'Ehi Silvia, vieni da me oggi?',
                        status: 'sent'
                    },
                    {
                        date: '22/01/2023 16:20:03',
                        message: 'Scusa per ieri ma mi sono dimenticato dell\'appuntamento..',
                        status: 'sent'
                    },
                    {
                        date: '22/01/2023 18:30:55',
                        message: 'Tranquillo ormai ci sono abituata, si dai vengo per le 8 e un quarto!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Maria',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '21/01/2023 16:15:22',
                        message: 'Ehi ma domani c\'è qualche compito?',
                        status: 'received'
                    },
                    {
                        date: '21/01/2023 16:20:03',
                        message: 'No, non credo',
                        status: 'sent'
                    },
                    {
                        date: '21/01/2023 16:30:55',
                        message: 'Ooook grazie!',
                        status: 'received'
                    }
                ]
            },
            {
                name: 'Antonietta',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '23/01/2023 16:15:22',
                        message: 'Ehi ma ieri ti ha scritto Silvia?',
                        status: 'received'
                    },
                    {
                        date: '23/01/2023 16:20:03',
                        message: 'No, le ho scritto io, perchè?',
                        status: 'sent'
                    },
                    {
                        date: '23/01/2023 18:30:55',
                        message: 'Poverina, era molto dispiaciuta per il tuo bidone dell\'altro giorno',
                        status: 'received'
                    },
                    {
                        date: '23/01/2023 16:20:03',
                        message: 'Eeeh lo so, ma poi è venuta da me e ci siamo chiariti!',
                        status: 'sent'
                    }
                ]
            }
        ],
        activeIndex: '0',
        newMessage: ''
    },
    methods: {
        activeFriend: function(index){
            this.activeIndex = index;
        },
        addMessage: function(){
            if(this.newMessage != ''){
                const newObj = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.newMessage,
                    status: 'sent'
                };
                this.contacts[this.activeIndex].messages.push(newObj);
                this.newMessage = '';
                this.autoAnswer();
            }
        },
        autoAnswer: function(){
            const contacts = this.contacts;
            const activeIndex = this.activeIndex;
            setTimeout(generateAnswer, 3000);
            function generateAnswer(){
                const newAnswerObj = {
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: 'ci sta',
                    status: 'received'
                }
                contacts[activeIndex].messages.push(newAnswerObj);
            }
        },
        searchFriend: function(){
            // this.contacts.visible
            // const invisible = this.contacts.map(friend=>{
            //     friend.visible=false;
            // });
            //             console.log(this.contacts[0].visible);
            this.contacts.forEach(friend => {
                friend.visible=false;
            });
        }
    }
})
