import logo from '../../Assets/jpg/1627080521_10-kartinkin-com-p-bloki-tekstura-besshovnaya-krasivo-13.jpg'



const store = {
    _state:{
        listData:[
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
            {title: 'Кирпич', text: logo},
        ],
        feedbackData:[
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
            {title:'Власов Игорь', text:'вгшзйцшапузцаугцйхпкхйпкуйипхкйуип ауауауауауа ац ацацацац ацацаца ппукпуы ауацуапуцпу'},
        ]
    },
    getState(){
        return this._state;
    },
    _rerenderEntireTree()  {
        console.log('State changed');
    },
}

export default store
window.store = store