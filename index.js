// Import CSS
import '../css/style.css';

// Material Modal Handler
class MaterialModal {
    constructor() {
        this.modal = document.getElementById('materialModal');
        this.modalBody = document.getElementById('modalBody');
        this.closeBtn = document.querySelector('.close-modal');
        this.materialsData = this.getMaterialsData();
        this.init();
    }

    init() {
        // Add click event to all material cards
        document.querySelectorAll('.material-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const materialId = card.dataset.material;
                this.showMaterial(materialId);
            });
        });

        // Close modal when clicking X
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }

        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('show')) {
                this.closeModal();
            }
        });
    }

    getMaterialsData() {
        return {
            pengenalan: {
                title: 'Pengenalan Kapita Selekta',
                icon: '📚',
                content: `
                    <h3>Overview</h3>
                    <p>Kapita Selekta adalah mata kuliah yang membahas topik-topik pilihan terkini dalam ilmu komputer dan teknologi informasi. Mata kuliah ini memberikan pemahaman mendalam tentang perkembangan teknologi terbaru dan aplikasinya dalam dunia nyata.</p>
                    
                    <h3>Tujuan Pembelajaran</h3>
                    <ul>
                        <li>Memahami konsep dasar dan perkembangan terkini dalam teknologi informasi</li>
                        <li>Menganalisis trend teknologi dan dampaknya terhadap industri</li>
                        <li>Mengembangkan kemampuan berpikir kritis dalam mengevaluasi teknologi baru</li>
                        <li>Mempersiapkan mahasiswa untuk menghadapi tantangan dunia kerja</li>
                    </ul>

                    <h3>Topik Utama</h3>
                    <ul>
                        <li><strong>Evolusi Teknologi:</strong> Perkembangan teknologi dari masa ke masa</li>
                        <li><strong>Paradigma Pemrograman:</strong> Object-oriented, functional, reactive programming</li>
                        <li><strong>Arsitektur Software:</strong> Monolithic, microservices, serverless</li>
                        <li><strong>Metodologi Pengembangan:</strong> Agile, Scrum, DevOps, CI/CD</li>
                        <li><strong>Tren Industri:</strong> Cloud computing, AI/ML, blockchain, IoT</li>
                    </ul>

                    <h3>Kompetensi yang Dikembangkan</h3>
                    <ul>
                        <li>Kemampuan analisis teknologi</li>
                        <li>Problem solving dengan teknologi modern</li>
                        <li>Adaptabilitas terhadap perubahan teknologi</li>
                        <li>Komunikasi teknis yang efektif</li>
                    </ul>

                    <div class="highlight">
                        <strong>Catatan Penting:</strong> Mata kuliah ini dirancang untuk memberikan mahasiswa exposure terhadap berbagai aspek teknologi informasi yang relevan dengan kebutuhan industri saat ini.
                    </div>
                `
            },
            web: {
                title: 'Pemrograman Web',
                icon: '💻',
                content: `
                    <h3>Pengenalan Pemrograman Web</h3>
                    <p>Pemrograman web adalah keterampilan fundamental dalam pengembangan aplikasi modern. Materi ini mencakup teknologi frontend dan backend yang digunakan untuk membangun aplikasi web yang interaktif dan responsif.</p>

                    <h3>Frontend Development</h3>
                    <h4>HTML5, CSS3, dan JavaScript</h4>
                    <ul>
                        <li>HTML5: Struktur dokumen, semantic HTML, forms</li>
                        <li>CSS3: Flexbox, Grid, animations, responsive design</li>
                        <li>JavaScript: ES6+, DOM manipulation, async programming</li>
                        <li>Modern Frameworks: React, Vue.js, Angular, Svelte</li>
                    </ul>

                    <h3>Backend Development</h3>
                    <ul>
                        <li><strong>Node.js & Express:</strong> JavaScript runtime untuk server-side</li>
                        <li><strong>Python:</strong> Django, Flask frameworks</li>
                        <li><strong>RESTful APIs:</strong> Desain dan implementasi API</li>
                    </ul>

                    <div class="highlight">
                        <strong>Best Practices:</strong> Selalu gunakan semantic HTML, tulis CSS yang maintainable, dan ikuti JavaScript style guide (ESLint).
                    </div>
                `
            },
            database: {
                title: 'Database Management',
                icon: '🗄️',
                content: `
                    <h3>Fundamental Database</h3>
                    <p>Database management adalah aspek krusial dalam pengembangan aplikasi modern. Memahami cara menyimpan, mengakses, dan mengelola data dengan efisien adalah keterampilan yang sangat penting.</p>

                    <h3>Relational Databases (SQL)</h3>
                    <ul>
                        <li>Tables, rows, columns, primary keys, foreign keys</li>
                        <li>SQL: SELECT, INSERT, UPDATE, DELETE, JOIN</li>
                        <li>Popular SQL: MySQL, PostgreSQL, SQLite</li>
                        <li>Normalization dan indexing</li>
                    </ul>

                    <h3>NoSQL Databases</h3>
                    <ul>
                        <li><strong>MongoDB:</strong> Document-oriented database</li>
                        <li><strong>Redis:</strong> In-memory data structure store</li>
                        <li><strong>Cassandra:</strong> Distributed database</li>
                    </ul>

                    <div class="highlight">
                        <strong>Performance Tips:</strong> Gunakan indexes dengan bijak, optimalkan queries, implement caching strategies.
                    </div>
                `
            },
            security: {
                title: 'Keamanan Sistem',
                icon: '🔒',
                content: `
                    <h3>Cybersecurity Fundamentals</h3>
                    <p>Keamanan sistem adalah aspek kritis dalam pengembangan aplikasi modern.</p>

                    <h3>CIA Triad</h3>
                    <ul>
                        <li><strong>Confidentiality:</strong> Melindungi informasi dari akses tidak sah</li>
                        <li><strong>Integrity:</strong> Memastikan data tidak dimodifikasi</li>
                        <li><strong>Availability:</strong> Memastikan sistem dapat diakses</li>
                    </ul>

                    <h3>OWASP Top 10</h3>
                    <ul>
                        <li>SQL Injection</li>
                        <li>Cross-Site Scripting (XSS)</li>
                        <li>Broken Authentication</li>
                        <li>Sensitive Data Exposure</li>
                    </ul>

                    <h3>Authentication & Authorization</h3>
                    <ul>
                        <li>Password hashing: bcrypt, Argon2</li>
                        <li>Multi-Factor Authentication (MFA)</li>
                        <li>OAuth 2.0 dan JWT</li>
                    </ul>

                    <div class="highlight">
                        <strong>Security Mindset:</strong> Security harus menjadi bagian dari design sejak awal.
                    </div>
                `
            },
            cloud: {
                title: 'Cloud Computing',
                icon: '☁️',
                content: `
                    <h3>Introduction to Cloud Computing</h3>
                    <p>Cloud computing telah merevolusi cara kita membangun dan mengelola aplikasi.</p>

                    <h3>Cloud Service Models</h3>
                    <ul>
                        <li><strong>IaaS:</strong> Infrastructure as a Service (EC2, VMs)</li>
                        <li><strong>PaaS:</strong> Platform as a Service (Heroku, App Engine)</li>
                        <li><strong>SaaS:</strong> Software as a Service (Gmail, Office 365)</li>
                    </ul>

                    <h3>Major Cloud Providers</h3>
                    <ul>
                        <li><strong>AWS:</strong> EC2, S3, Lambda, RDS</li>
                        <li><strong>Google Cloud:</strong> Compute Engine, Cloud Storage</li>
                        <li><strong>Microsoft Azure:</strong> Virtual Machines, Blob Storage</li>
                    </ul>

                    <h3>Cloud Native Technologies</h3>
                    <ul>
                        <li><strong>Docker:</strong> Container platform</li>
                        <li><strong>Kubernetes:</strong> Container orchestration</li>
                        <li><strong>Serverless:</strong> Lambda, Cloud Functions</li>
                    </ul>

                    <div class="highlight">
                        <strong>Cloud Benefits:</strong> Scalability, cost-effectiveness, high availability, disaster recovery.
                    </div>
                `
            },
            ai: {
                title: 'Artificial Intelligence',
                icon: '🤖',
                content: `
                    <h3>Introduction to AI</h3>
                    <p>Artificial Intelligence (AI) adalah teknologi yang memungkinkan mesin melakukan tugas yang memerlukan kecerdasan manusia.</p>

                    <h3>Machine Learning</h3>
                    <ul>
                        <li><strong>Supervised Learning:</strong> Classification, Regression</li>
                        <li><strong>Unsupervised Learning:</strong> Clustering, Dimensionality Reduction</li>
                        <li><strong>Reinforcement Learning:</strong> Q-Learning, Policy Gradient</li>
                    </ul>

                    <h3>Deep Learning</h3>
                    <ul>
                        <li><strong>Neural Networks:</strong> Input, hidden, output layers</li>
                        <li><strong>CNN:</strong> Image processing dan computer vision</li>
                        <li><strong>RNN:</strong> Sequential data dan time series</li>
                        <li><strong>Transformers:</strong> BERT, GPT, state-of-the-art NLP</li>
                    </ul>

                    <h3>AI Frameworks</h3>
                    <ul>
                        <li><strong>TensorFlow:</strong> Google's ML framework</li>
                        <li><strong>PyTorch:</strong> Facebook's deep learning framework</li>
                        <li><strong>Scikit-learn:</strong> Traditional ML algorithms</li>
                    </ul>

                    <div class="highlight">
                        <strong>Future of AI:</strong> Generative AI, Large Language Models, dan Multimodal AI akan terus mengubah cara kita bekerja.
                    </div>
                `
            },
            swot: {
                title: 'Analisis SWOT',
                icon: '📊',
                content: `
                    <h3>Pengenalan Analisis SWOT</h3>
                    <p>SWOT Analysis adalah framework untuk mengidentifikasi Strengths, Weaknesses, Opportunities, dan Threats.</p>

                    <h3>Komponen SWOT</h3>
                    <ul>
                        <li><strong>Strengths (Kekuatan):</strong> Faktor internal positif</li>
                        <li><strong>Weaknesses (Kelemahan):</strong> Faktor internal negatif</li>
                        <li><strong>Opportunities (Peluang):</strong> Faktor eksternal positif</li>
                        <li><strong>Threats (Ancaman):</strong> Faktor eksternal negatif</li>
                    </ul>

                    <h3>Cara Melakukan Analisis SWOT</h3>
                    <ol>
                        <li>Pengumpulan data dan brainstorming</li>
                        <li>Kategorisasi ke dalam 4 kuadran</li>
                        <li>Prioritaskan berdasarkan dampak</li>
                        <li>Develop strategi SO, WO, ST, WT</li>
                        <li>Buat action plan konkret</li>
                    </ol>

                    <div class="highlight">
                        <strong>Key Takeaway:</strong> SWOT adalah starting point untuk strategic planning. Kombinasikan dengan tools lain untuk comprehensive view.
                    </div>
                `
            },
            porter: {
                title: 'Analisis Porter (Five Forces)',
                icon: '⚔️',
                content: `
                    <h3>Porter's Five Forces</h3>
                    <p>Framework untuk menganalisis tingkat kompetisi dan daya tarik suatu industri.</p>

                    <h3>Lima Kekuatan Kompetitif</h3>
                    <ul>
                        <li><strong>Threat of New Entrants:</strong> Hambatan masuk industri</li>
                        <li><strong>Bargaining Power of Suppliers:</strong> Pengaruh pemasok</li>
                        <li><strong>Bargaining Power of Buyers:</strong> Pengaruh pembeli</li>
                        <li><strong>Threat of Substitutes:</strong> Ancaman produk pengganti</li>
                        <li><strong>Rivalry Among Competitors:</strong> Intensitas persaingan</li>
                    </ul>

                    <h3>Aplikasi dalam Strategi</h3>
                    <ul>
                        <li>Assess industry attractiveness</li>
                        <li>Identify competitive advantages</li>
                        <li>Formulate positioning strategy</li>
                    </ul>

                    <div class="highlight">
                        <strong>Strategic Insight:</strong> Porter's Five Forces membantu understand "why" certain industries lebih profitable.
                    </div>
                `
            }
        };
    }

    showMaterial(materialId) {
        const material = this.materialsData[materialId];
        if (!material) return;

        this.modalBody.innerHTML = `
            <h2>
                <span style="font-size: 2.5rem; margin-right: 1rem;">${material.icon}</span>
                ${material.title}
            </h2>
            ${material.content}
        `;

        this.modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        this.modal.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// Navigation functionality
class Navigation {
    constructor() {
        this.hamburger = document.getElementById('hamburger');
        this.navMenu = document.getElementById('navMenu');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.navbar = document.querySelector('.navbar');
        
        this.init();
    }

    init() {
        this.setupHamburger();
        this.setupNavLinks();
        this.setupScrollEffect();
    }

    setupHamburger() {
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.hamburger.classList.toggle('active');
                this.navMenu.classList.toggle('active');
            });
        }
    }

    setupNavLinks() {
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.hamburger.classList.remove('active');
                this.navMenu.classList.remove('active');
            });
        });
    }

    setupScrollEffect() {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                this.navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
            } else {
                this.navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

// Smooth scroll for anchor links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

// Scroll animations
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }

    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, this.observerOptions);

        this.observeElements();
    }

    observeElements() {
        const elements = document.querySelectorAll(
            '.material-card, .timeline-item, .stat-item, .contact-item'
        );

        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = `all 0.6s ease ${index * 0.1}s`;
            this.observer.observe(el);
        });
    }
}

// Active nav link on scroll
class ActiveNavigation {
    constructor() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => {
            this.updateActiveLink();
        });
    }

    updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
}

// Counter animation for stats
class CounterAnimation {
    constructor() {
        this.init();
    }

    init() {
        const counters = document.querySelectorAll('.stat-number');
        const speed = 200;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target, speed);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(counter, speed) {
        const target = counter.innerText;
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target.replace(/\D/g, ''));
        
        let count = 0;
        const increment = numericValue / speed;

        const updateCount = () => {
            count += increment;
            if (count < numericValue) {
                counter.innerText = Math.ceil(count) + (isPercentage ? '%' : '+');
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    }
}

// Back to top button
const createBackToTop = () => {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.className = 'back-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });

    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
    });
};

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    new MaterialModal();
    new Navigation();
    new SmoothScroll();
    new ScrollAnimations();
    new ActiveNavigation();
    new CounterAnimation();
    
    // Create back to top button
    createBackToTop();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // Console message
    console.log('%c🎓 Website Anggun Azqiyah Azzahra - MK Kapita Selekta', 
        'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%c📚 Built with HTML, CSS, JavaScript & Webpack', 
        'color: #10b981; font-size: 14px;');
    console.log('%c✨ Dosen: RASP (Raden Arum Setia Priadi) - 2025', 
        'color: #6366f1; font-size: 12px;');
});

// Export for potential module usage
export { MaterialModal, Navigation, SmoothScroll, ScrollAnimations };