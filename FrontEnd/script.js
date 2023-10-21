document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        username: formData.get('username'),
        password: formData.get('password')
    };

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            if (data.error === 'NO_USER') {
                document.getElementById('error-message').textContent = "ID가 없습니다. 회원가입을 해주세요";
            } else {
                document.getElementById('error-message').textContent = data.error;
            }
        } else {
            // 로그인 성공 시, 메인 페이지로 리디렉션 or 다른 작업 수행
            window.location.href = '/main';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
