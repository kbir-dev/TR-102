const express = require('express');

const app = express();
const port = 8000; // Set your desired port number

app.get('/fetchTodos', async (req, res) => {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        const todos = data.todos;

        if (!data) {
            // return res.send('No data');
            res.status(404).json({
                success: false,
                message:"No data fetched",
            })
        }

        // res.send(todos);

        res.status(200).json({
            success: true,
            message:"data fetched successfully",
            Data:todos,
        })
    } catch (error) {
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
