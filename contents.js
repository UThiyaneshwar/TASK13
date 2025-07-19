class LoginSystem {
    constructor() {
        this.init();
    }

    init() {
        this.checkExistingSession();
        this.bindEvents();
    }

    bindEvents() {
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', (e) => this.handleLogin(e));

        const logoutBtn = document.getElementById('logoutBtn');
        logoutBtn.addEventListener('click', () => this.handleLogout());
    }

    checkExistingSession() {
        const storedUsername = localStorage.getItem('username');
        
        if (storedUsername) {
            this.showHomePage(storedUsername);
        } else {
            this.showLoginPage();
        }
    }

    showLoginPage() {
        document.getElementById('loginPage').classList.remove('hidden');
        document.getElementById('homePage').classList.add('hidden');
    }

    showHomePage(username) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('homePage').classList.remove('hidden');
        
        document.getElementById('welcomeMessage').textContent = `Hello, ${username}!`;
        
        const now = new Date();
        const timeString = now.toLocaleString();
        document.getElementById('loginTime').textContent = timeString;
    }

    handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        
        this.hideError();

        if (!username || !password) {
            this.showError('Please fill in all fields');
            return;
        }

        if (username === 'admin' && password === 'password123') {
            localStorage.setItem('username', username);
            this.showHomePage(username);
        } else {
            this.showError('Invalid username or password');
        }
    }

    handleLogout() {
        localStorage.removeItem('username');
        
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        this.hideError();
        
        this.showLoginPage();
    }

    showError(message) {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
    }

    hideError() {
        const errorDiv = document.getElementById('errorMessage');
        errorDiv.classList.add('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LoginSystem();
});
