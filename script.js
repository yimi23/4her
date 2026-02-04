// ================================
// PRODUCTION-QUALITY JAVASCRIPT
// Cinematic interactions & animations
// ================================

(function() {
    'use strict';
    
    // ================================
    // HERO VIDEO - WITH SOUND
    // ================================
    
    const heroVideo = document.querySelector('.hero__video');
    if (heroVideo) {
        // Enable sound (unmuted by default)
        heroVideo.muted = false;
        
        // Ensure it plays with sound
        heroVideo.play().catch(err => {
            console.log('Autoplay with sound blocked, user interaction needed');
        });
        
        // Pause video when scrolled past
        const heroSection = document.querySelector('.hero');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    // Hero is out of view, pause video
                    heroVideo.pause();
                } else {
                    // Hero is in view, play video
                    heroVideo.play().catch(() => {});
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(heroSection);
    }
    
    // ================================
    // CINEMATIC STORY PLAYER
    // ================================
    
    const StoryPlayer = {
        video: document.getElementById('storyVideo'),
        chapters: document.querySelectorAll('.chapter'),
        progressBar: document.getElementById('progressBar'),
        timeDisplay: document.getElementById('timeDisplay'),
        currentChapterDisplay: document.getElementById('currentChapter'),
        speedButtons: document.querySelectorAll('.speed-btn'),
        currentIndex: 0,
        
        init() {
            if (!this.video) return;
            
            // Chapter navigation
            this.chapters.forEach((btn, index) => {
                btn.addEventListener('click', () => this.loadChapter(index));
            });
            
            // Video progress
            this.video.addEventListener('timeupdate', () => this.updateProgress());
            
            // Auto-play next chapter
            this.video.addEventListener('ended', () => this.playNext());
            
            // Progress bar seek
            const progressContainer = this.progressBar.parentElement;
            progressContainer.addEventListener('click', (e) => this.seek(e));
            
            // Speed controls
            this.speedButtons.forEach(btn => {
                btn.addEventListener('click', () => this.setSpeed(btn));
            });
            
            // Restore saved speed preference or default to 1x
            this.restoreSpeed();
            
            console.log('✓ Story player initialized');
        },
        
        restoreSpeed() {
            const savedSpeed = parseFloat(localStorage.getItem('videoSpeed')) || 1;
            this.video.playbackRate = savedSpeed;
            
            // Update UI to match
            this.speedButtons.forEach(btn => {
                const btnSpeed = parseFloat(btn.dataset.speed);
                if (btnSpeed === savedSpeed) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
            
            console.log(`✓ Speed restored to ${savedSpeed}x`);
        },
        
        setSpeed(btn) {
            const speed = parseFloat(btn.dataset.speed);
            
            // Set playback rate
            this.video.playbackRate = speed;
            
            // Update button states
            this.speedButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Save speed preference
            localStorage.setItem('videoSpeed', speed);
            
            console.log(`✓ Speed set to ${speed}x`);
        },
        
        loadChapter(index) {
            const chapter = this.chapters[index];
            if (!chapter) return;
            
            const src = chapter.dataset.src;
            const number = chapter.querySelector('.chapter__number').textContent;
            
            // Save current playback rate
            const currentSpeed = this.video.playbackRate;
            
            // Update video source
            this.video.src = src;
            this.video.load();
            
            // Restore speed after video loads
            this.video.addEventListener('loadedmetadata', () => {
                this.video.playbackRate = currentSpeed;
            }, { once: true });
            
            this.video.play();
            
            // Update UI
            this.chapters.forEach(btn => btn.classList.remove('active'));
            chapter.classList.add('active');
            
            this.currentChapterDisplay.textContent = `Chapter ${number}`;
            this.currentIndex = index;
            
            console.log(`✓ Loaded chapter ${number} at ${currentSpeed}x speed`);
        },
        
        updateProgress() {
            const progress = (this.video.currentTime / this.video.duration) * 100;
            this.progressBar.style.width = `${progress}%`;
            
            // Update time display
            const current = this.formatTime(this.video.currentTime);
            const total = this.formatTime(this.video.duration);
            this.timeDisplay.textContent = `${current} / ${total}`;
        },
        
        seek(e) {
            const container = e.currentTarget;
            const clickX = e.clientX - container.getBoundingClientRect().left;
            const width = container.offsetWidth;
            const seekTime = (clickX / width) * this.video.duration;
            this.video.currentTime = seekTime;
        },
        
        playNext() {
            const nextIndex = this.currentIndex + 1;
            if (nextIndex < this.chapters.length) {
                this.loadChapter(nextIndex);
            } else {
                console.log('✓ All chapters complete');
            }
        },
        
        formatTime(seconds) {
            if (isNaN(seconds)) return '0:00';
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        }
    };
    
    StoryPlayer.init();
    
    // ================================
    // FINALE VIDEO SPEED CONTROL
    // ================================
    
    const finaleVideo = document.querySelector('.finale__video video');
    if (finaleVideo) {
        // Add speed controls to finale video too
        finaleVideo.addEventListener('loadedmetadata', () => {
            finaleVideo.playbackRate = 1;
        });
        
        // Allow keyboard shortcuts for speed
        document.addEventListener('keydown', (e) => {
            if (e.key === '+' || e.key === '=') {
                // Speed up
                if (finaleVideo.playbackRate < 2) {
                    finaleVideo.playbackRate += 0.25;
                    console.log(`✓ Finale speed: ${finaleVideo.playbackRate}x`);
                }
            } else if (e.key === '-' || e.key === '_') {
                // Slow down
                if (finaleVideo.playbackRate > 0.5) {
                    finaleVideo.playbackRate -= 0.25;
                    console.log(`✓ Finale speed: ${finaleVideo.playbackRate}x`);
                }
            }
        });
    }
    
    // ================================
    // MEMORIES CAROUSEL
    // ================================
    
    const Carousel = {
        container: document.getElementById('carousel'),
        track: document.getElementById('carouselTrack'),
        cards: document.querySelectorAll('.card'),
        prevBtn: document.getElementById('prevBtn'),
        nextBtn: document.getElementById('nextBtn'),
        dotsContainer: document.getElementById('dots'),
        currentIndex: 0,
        cardWidth: 0,
        gap: 0,
        isDragging: false,
        startPos: 0,
        currentTranslate: 0,
        prevTranslate: 0,
        
        init() {
            if (!this.track) return;
            
            this.calculateDimensions();
            this.createDots();
            this.setupNavigation();
            this.setupDragScroll();
            this.setupVideoCards();
            
            window.addEventListener('resize', () => this.calculateDimensions());
            
            console.log('✓ Carousel initialized');
        },
        
        calculateDimensions() {
            if (this.cards.length === 0) return;
            
            const firstCard = this.cards[0];
            const style = window.getComputedStyle(firstCard);
            this.cardWidth = firstCard.offsetWidth;
            this.gap = parseInt(style.marginRight) || 32;
            
            console.log(`✓ Card width: ${this.cardWidth}px, gap: ${this.gap}px`);
        },
        
        createDots() {
            if (!this.dotsContainer) return;
            
            this.dotsContainer.innerHTML = '';
            this.cards.forEach((_, index) => {
                const dot = document.createElement('span');
                dot.classList.add('carousel__dot');
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => this.goToSlide(index));
                this.dotsContainer.appendChild(dot);
            });
        },
        
        setupNavigation() {
            if (this.prevBtn) {
                this.prevBtn.addEventListener('click', () => this.prev());
            }
            
            if (this.nextBtn) {
                this.nextBtn.addEventListener('click', () => this.next());
            }
        },
        
        setupDragScroll() {
            // Mouse events
            this.track.addEventListener('mousedown', (e) => this.startDrag(e));
            this.track.addEventListener('mousemove', (e) => this.drag(e));
            this.track.addEventListener('mouseup', () => this.endDrag());
            this.track.addEventListener('mouseleave', () => this.endDrag());
            
            // Touch events
            this.track.addEventListener('touchstart', (e) => this.startDrag(e));
            this.track.addEventListener('touchmove', (e) => this.drag(e));
            this.track.addEventListener('touchend', () => this.endDrag());
        },
        
        setupVideoCards() {
            this.cards.forEach(card => {
                if (card.classList.contains('card--video')) {
                    const video = card.querySelector('video');
                    const playBtn = card.querySelector('.card__play');
                    
                    // Play on hover
                    card.addEventListener('mouseenter', () => {
                        if (video && !this.isDragging) video.play();
                    });
                    
                    card.addEventListener('mouseleave', () => {
                        if (video) {
                            video.pause();
                            video.currentTime = 0;
                        }
                    });
                    
                    // Click to open lightbox
                    if (playBtn) {
                        playBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            const src = card.dataset.src;
                            Lightbox.open(src, 'video');
                        });
                    }
                }
                
                // Image cards - click to open lightbox
                if (card.dataset.type === 'image') {
                    card.addEventListener('click', () => {
                        const src = card.dataset.src;
                        Lightbox.open(src, 'image');
                    });
                }
            });
        },
        
        startDrag(e) {
            this.isDragging = true;
            this.startPos = this.getPositionX(e);
            this.track.style.cursor = 'grabbing';
            this.track.style.transition = 'none';
        },
        
        drag(e) {
            if (!this.isDragging) return;
            
            const currentPosition = this.getPositionX(e);
            const diff = currentPosition - this.startPos;
            this.currentTranslate = this.prevTranslate + diff;
            this.setTransform();
        },
        
        endDrag() {
            if (!this.isDragging) return;
            
            this.isDragging = false;
            this.track.style.cursor = 'grab';
            
            const movedBy = this.currentTranslate - this.prevTranslate;
            
            // Snap to nearest slide
            if (movedBy < -100 && this.currentIndex < this.cards.length - 1) {
                this.next();
            } else if (movedBy > 100 && this.currentIndex > 0) {
                this.prev();
            } else {
                this.goToSlide(this.currentIndex);
            }
        },
        
        getPositionX(e) {
            return e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
        },
        
        next() {
            if (this.currentIndex < this.cards.length - 1) {
                this.currentIndex++;
                this.updateSlide();
            }
        },
        
        prev() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
                this.updateSlide();
            }
        },
        
        goToSlide(index) {
            this.currentIndex = index;
            this.updateSlide();
        },
        
        updateSlide() {
            this.track.style.transition = 'transform 0.7s cubic-bezier(0.19, 1, 0.22, 1)';
            this.currentTranslate = -(this.currentIndex * (this.cardWidth + this.gap));
            this.prevTranslate = this.currentTranslate;
            this.setTransform();
            this.updateDots();
        },
        
        setTransform() {
            this.track.style.transform = `translateX(${this.currentTranslate}px)`;
        },
        
        updateDots() {
            const dots = this.dotsContainer.querySelectorAll('.carousel__dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === this.currentIndex);
            });
        }
    };
    
    Carousel.init();
    
    // ================================
    // LIGHTBOX
    // ================================
    
    const Lightbox = {
        element: document.getElementById('lightbox'),
        content: document.getElementById('lightboxContent'),
        closeBtn: document.getElementById('lightboxClose'),
        
        init() {
            if (!this.element) return;
            
            this.closeBtn.addEventListener('click', () => this.close());
            this.element.addEventListener('click', (e) => {
                if (e.target === this.element) this.close();
            });
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.element.classList.contains('active')) {
                    this.close();
                }
            });
            
            console.log('✓ Lightbox initialized');
        },
        
        open(src, type) {
            this.content.innerHTML = '';
            
            if (type === 'video') {
                const video = document.createElement('video');
                video.src = src;
                video.controls = true;
                video.autoplay = true;
                this.content.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = src;
                img.alt = 'Memory';
                this.content.appendChild(img);
            }
            
            this.element.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            console.log(`✓ Opened lightbox: ${type}`);
        },
        
        close() {
            this.element.classList.remove('active');
            document.body.style.overflow = '';
            
            // Stop any playing video
            const video = this.content.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
            
            setTimeout(() => {
                this.content.innerHTML = '';
            }, 300);
            
            console.log('✓ Closed lightbox');
        }
    };
    
    Lightbox.init();
    
    // ================================
    // SCROLL ANIMATIONS
    // ================================
    
    const ScrollAnimations = {
        elements: document.querySelectorAll('section'),
        
        init() {
            if (!('IntersectionObserver' in window)) {
                console.log('⚠ IntersectionObserver not supported');
                return;
            }
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            });
            
            this.elements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(40px)';
                el.style.transition = 'opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
                observer.observe(el);
            });
            
            console.log('✓ Scroll animations initialized');
        }
    };
    
    ScrollAnimations.init();
    
    // ================================
    // LETTER PARAGRAPH ANIMATIONS
    // ================================
    
    const LetterAnimations = {
        init() {
            const paragraphs = document.querySelectorAll('.letter__content p');
            
            if (paragraphs.length === 0) return;
            
            paragraphs.forEach((p, index) => {
                p.style.opacity = '0';
                p.style.transform = 'translateY(20px)';
                p.style.transition = `opacity 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.19, 1, 0.22, 1) ${index * 0.1}s`;
            });
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const paragraphs = entry.target.querySelectorAll('p');
                        paragraphs.forEach(p => {
                            p.style.opacity = '1';
                            p.style.transform = 'translateY(0)';
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            const letterContent = document.querySelector('.letter__content');
            if (letterContent) {
                observer.observe(letterContent);
            }
            
            console.log('✓ Letter animations initialized');
        }
    };
    
    LetterAnimations.init();
    
    // ================================
    // SMOOTH SCROLL
    // ================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ================================
    // PERFORMANCE - LAZY LOAD VIDEOS
    // ================================
    
    const LazyLoad = {
        init() {
            if (!('IntersectionObserver' in window)) return;
            
            const videos = document.querySelectorAll('video[data-src]');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        video.src = video.dataset.src;
                        video.load();
                        observer.unobserve(video);
                        console.log('✓ Lazy loaded video');
                    }
                });
            }, { rootMargin: '200px' });
            
            videos.forEach(video => observer.observe(video));
            
            console.log(`✓ Lazy load initialized (${videos.length} videos)`);
        }
    };
    
    LazyLoad.init();
    
    // ================================
    // DOWNLOAD INDIVIDUAL MEMORIES
    // ================================
    
    const DownloadMemories = {
        init() {
            // Add download buttons to all cards
            this.addDownloadButtons();
            console.log('✓ Individual download buttons initialized');
        },
        
        addDownloadButtons() {
            const cards = document.querySelectorAll('.card');
            
            cards.forEach(card => {
                const overlay = card.querySelector('.card__overlay');
                const src = card.dataset.src;
                const type = card.dataset.type;
                
                // Create download button
                const downloadBtn = document.createElement('button');
                downloadBtn.className = 'card__download';
                downloadBtn.setAttribute('aria-label', 'Download this memory');
                downloadBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                `;
                
                // Add click handler
                downloadBtn.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent lightbox from opening
                    this.downloadFile(src, type);
                });
                
                // Add to overlay
                overlay.appendChild(downloadBtn);
            });
        },
        
        async downloadFile(src, type) {
            try {
                // Fetch the file
                const response = await fetch(src);
                const blob = await response.blob();
                
                // Create download link
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                
                // Use original filename
                const filename = src.split('/').pop();
                link.download = filename;
                
                // Trigger download
                link.click();
                
                // Clean up
                URL.revokeObjectURL(link.href);
                
                console.log(`✓ Downloaded ${filename}`);
            } catch (error) {
                console.error('Download failed:', error);
                alert('Failed to download. Please try again.');
            }
        }
    };
    
    DownloadMemories.init();
    
    // ================================
    // VALENTINE RESPONSE SYSTEM
    // ================================
    
    const ValentineResponse = {
        yesBtn: document.getElementById('yesBtn'),
        noBtn: document.getElementById('noBtn'),
        buttonsContainer: document.getElementById('valentineButtons'),
        secretMessage: document.getElementById('secretMessage'),
        responded: false,
        
        init() {
            if (!this.yesBtn || !this.noBtn) return;
            
            // "Yes" button - triggers everything
            this.yesBtn.addEventListener('click', () => this.handleYes());
            
            // "No" button - runs away on hover AND click
            this.noBtn.addEventListener('mouseenter', () => this.runAway());
            this.noBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.runAway();
            });
            
            // Touch devices - run away on touch
            this.noBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.runAway();
            });
            
            console.log('✓ Valentine response system initialized');
        },
        
        runAway() {
            // Don't run away if already responded
            if (this.responded) return;
            
            // Get random position within viewport
            const maxX = window.innerWidth - this.noBtn.offsetWidth - 40;
            const maxY = window.innerHeight - this.noBtn.offsetHeight - 40;
            
            const randomX = Math.random() * maxX;
            const randomY = Math.random() * maxY;
            
            // Move button to random position
            this.noBtn.style.position = 'fixed';
            this.noBtn.style.left = randomX + 'px';
            this.noBtn.style.top = randomY + 'px';
            this.noBtn.style.transition = 'all 0.3s ease';
            
            console.log('👻 No button escaped!');
        },
        
        async handleYes() {
            if (this.responded) return;
            this.responded = true;
            
            // 1. Hide buttons
            this.buttonsContainer.style.opacity = '0';
            setTimeout(() => {
                this.buttonsContainer.style.display = 'none';
            }, 300);
            
            // 2. Trigger confetti explosion 🎉
            this.celebrateWithConfetti();
            
            // 3. Reveal secret message
            setTimeout(() => {
                this.secretMessage.classList.remove('hidden');
                this.secretMessage.classList.add('fadeIn');
            }, 800);
            
            // 4. Send WhatsApp notification to Praise
            setTimeout(() => {
                this.sendNotification();
            }, 1500);
            
            console.log('💜 She said YES!');
        },
        
        celebrateWithConfetti() {
            // Create multiple confetti bursts
            const duration = 3000;
            const animationEnd = Date.now() + duration;
            const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };
            
            function randomInRange(min, max) {
                return Math.random() * (max - min) + min;
            }
            
            const interval = setInterval(function() {
                const timeLeft = animationEnd - Date.now();
                
                if (timeLeft <= 0) {
                    return clearInterval(interval);
                }
                
                const particleCount = 50 * (timeLeft / duration);
                
                // Purple and gold confetti
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                    colors: ['#4A1D96', '#B8860B', '#FFD700', '#9333EA']
                });
                confetti({
                    ...defaults,
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                    colors: ['#4A1D96', '#B8860B', '#FFD700', '#9333EA']
                });
            }, 250);
            
            console.log('🎉 Confetti celebration started!');
        },
        
        async sendNotification() {
            try {
                // Send notification via ntfy.sh (free, instant push notifications)
                const response = await fetch('https://ntfy.sh/praise-valentine-4her', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'text/plain',
                        'Title': '💜 Valentine Response',
                        'Priority': 'high',
                        'Tags': 'heart,tada'
                    },
                    body: '🎉 SHE SAID YES! Adufe just accepted to be your Valentine!'
                });
                
                console.log('📱 Notification sent via ntfy.sh!');
                console.log('💡 Subscribe at: https://ntfy.sh/praise-valentine-4her');
            } catch (error) {
                console.error('Failed to send notification:', error);
                // Fallback: log to console
                console.log('📱 NOTIFICATION: She said YES! (check console)');
            }
        }
    };
    
    ValentineResponse.init();
    
    // ================================
    // RELATIONSHIP STATS COUNTER
    // ================================
    
    const StatsCounter = {
        metDate: new Date('2024-10-23'), // October 23, 2024
        
        init() {
            this.updateStats();
            // Update every hour (counter increments daily at midnight)
            setInterval(() => this.updateStats(), 3600000);
            console.log('✓ Stats counter initialized - updates daily automatically');
        },
        
        updateStats() {
            const now = new Date();
            
            // Days since met
            const daysSinceMet = Math.floor((now - this.metDate) / (1000 * 60 * 60 * 24));
            const metElement = document.getElementById('daysSinceMet');
            if (metElement) {
                this.animateCounter(metElement, daysSinceMet);
            }
        },
        
        animateCounter(element, targetValue) {
            const duration = 2000; // 2 seconds
            const start = 0;
            const startTime = Date.now();
            
            function update() {
                const now = Date.now();
                const progress = Math.min((now - startTime) / duration, 1);
                const currentValue = Math.floor(progress * targetValue);
                
                element.textContent = currentValue;
                
                if (progress < 1) {
                    requestAnimationFrame(update);
                }
            }
            
            update();
        }
    };
    
    StatsCounter.init();
    
    // ================================
    // CONSOLE SIGNATURE
    // ================================
    
    console.log('%c💜 For Adufe', 'color: #B8860B; font-size: 24px; font-weight: bold; font-family: serif;');
    console.log('%cBuilt with love and intention', 'color: #4A1D96; font-size: 14px; font-style: italic;');
    console.log('%c— Praise', 'color: #999; font-size: 12px;');
    console.log('%cBlack & white monochrome + dark purple + gold', 'color: #666; font-size: 10px;');
    
})();
