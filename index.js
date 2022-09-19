const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/register", async (req, res) => {
    res.json({success: true});
});

app.post("/api/login", async (req, res) => {
    const token = jwt.sign({
        data: {...req.body, id: 1, uuid: "234ofosodfosdfo123", user_city: "London", is_therapist: true, is_client: true},
        exp: 10000000
    }, "supersecrettoken")


    res.json({success: "true", access: token})
})

app.get("/api/journal/entries", async (req, res) => {
    res.json({
        entries: [
            {
                id: 1,
                title: "Entry 1",
                description: "My day has been good",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 2,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 3,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 4,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 5,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 6,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 7,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 8,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 9,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 10,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 11,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 12,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 13,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 14,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 15,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 16,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 17,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 18,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 19,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 20,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 21,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 22,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 23,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 24,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 25,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 26,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 27,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 28,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 29,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            },
            {
                id: 30,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😞"
            },
            {
                id: 31,
                title: "Entry 2",
                description: "Bad day",
                date_created: Date.now(),
                current_weather: "sunny",
                current_mood: "😄"
            }
        ]
    })
})

app.post("/api/journal/create", async (req, res) => {
    console.log(req.headers);
    res.json({success: true});
})

app.get("/api/therapist/journals", async (req, res) => {
    const clientsArr = [
        {
            user_id: 1,
            username: "kjones1",
            first_name: "Kasey",
            last_name: "Jones",
            journal_entries: [
                {
                    entry_id: 100,
                    title: "Big Sad",
                    current_mood: "😄"
                }
            ]
        },
        {
            user_id: 2,
            username: "thefixer2",
            first_name: "Elvis",
            last_name: "F",
            journal_entries: [
                {
                    entry_id: 1020,
                    title: "Happy Happy",
                    current_mood: "😄"
                },
                {
                    entry_id: 1040,
                    title: "Still happy",
                    current_mood: "😄"
                }
            ]
        }
    ]

    res.json({success: "true", clients: clientsArr})
})

app.listen(8000, () => console.log("Server ok"))