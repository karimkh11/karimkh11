
        document.getElementById('search-input').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const articles = document.querySelectorAll('.article');

            for (const article of articles) {
                const title = article.querySelector('.article__title').textContent.toLowerCase();
                const content = article.querySelector('.article__text').textContent.toLowerCase();

                if (title.includes(query) || content.includes(query)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            }
        });

        document.getElementById('dark-mode-toggle').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            this.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
        });
