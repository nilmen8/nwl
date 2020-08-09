const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //Inserir dados

    proffyValue = {
      name: 'Maik Brito',
      Avatar: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
      whatsapp: '999999999',
      bio: 'Instrutor de Quimica',
    }

    classValue = {
      subject: 'Quimica',
      cost: '20',
    }

    classScheduleValues = [
      {
        weekday: 1,
        time_from: 720,
        time_to: 1220
      },
      {
      weekday: [0],
      time_from: [720],
      time_to: [1220]
      }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    //Consultar os dados inseridos

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "520"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClassesSchedules)
})