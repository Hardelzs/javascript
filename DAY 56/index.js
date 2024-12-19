
        const form = document.getElementById('quiz-form');

        // Dynamically load questions
        quizQuestions.forEach((item, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `${index + 1}. ${item.question}`;
            questionDiv.appendChild(questionTitle);

            const optionsDiv = document.createElement('div');
            optionsDiv.classList.add('options');

            item.options.forEach(option => {
                const label = document.createElement('label');
                label.innerHTML = `<input type="radio" name="q${index}" value="${option[0]}"> ${option}`;
                optionsDiv.appendChild(label);
            });

            questionDiv.appendChild(optionsDiv);
            form.appendChild(questionDiv);
        });

        // Handle quiz submission
        document.getElementById('submit-btn').addEventListener('click', function() {
            let score = 0;

            quizQuestions.forEach((item, index) => {
                const selectedOption = form[`q${index}`]?.value;
                if (selectedOption === item.correct) {
                    score++;
                }
            });

            document.getElementById('result').textContent = `You scored ${score} out of ${quizQuestions.length}`;
            document.getElementById('restart').onload
        });
    