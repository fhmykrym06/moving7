/**
 * Smart Image Management System for Moving Company Blog
 * Automatically selects appropriate images from assets/images directory
 * Based on content categories, topics, and context
 */

class ImageManager {
    constructor() {
        this.imageDatabase = this.initializeImageDatabase();
        this.baseImagePath = '../assets/images/';
        this.authorImagePath = '../assets/images/authors/';
    }

    /**
     * Initialize the image database with all available images
     * Categorized by topic, type, and usage context
     */
    initializeImageDatabase() {
        return {
            // Main moving service images
            services: [
                'furniture_moving_services_jeddah_professionals.jpg',
                'furniture_moving_experts_jeddah_city_saudi.jpg',
                'furniture_moving_specialists_jeddah_city.jpg',
                'expert_furniture_movers_jeddah.jpg',
                'furniture_moving_company_jeddah_professional.jpg'
            ],
            
            // Cost-saving and affordable moving
            affordable: [
                'affordable_moving_company_jeddah_saudi_arabia.jpg',
                'affordable_furniture_movers_jeddah.jpg',
                'cheap_furniture_removalists_jeddah_ksa.jpg'
            ],
            
            // Packing and protection
            packing: [
                'furniture_packing_moving_jeddah.jpg',
                'furniture_protection_moving_jeddah.jpg',
                'furniture-packing-guide.jpg'
            ],
            
            // Trucks and equipment
            trucks: [
                'furniture_moving_trucks_jeddah.jpg'
            ],
            
            // Specialized services
            specialized: [
                'furniture_assembly_service_jeddah_experts.jpg',
                'furniture_relocation_services_jeddah_city.jpg',
                'furniture_relocation_specialists_jeddah_city.jpg',
                'business_relocation_experts_jeddah_ksa.jpg',
                'furniture_pickup_services_jeddah_ksa.jpg',
                'office-moving-guide.jpg',
                'furniture-assembly-guide.jpg',
                'kitchen-moving-guide.jpg'
            ],
            
            // Regional/area specific
            areas: [
                'furniture_relocation_jeddah_services.jpg',
                'furniture_moving_jeddah_city_services.jpg',
                'furniture_moving_jeddah_saudi_arabia.jpg',
                'south-jeddah-moving.jpg',
                'central-jeddah-moving.jpg',
                'west-jeddah-coastal.jpg',
                'east-jeddah-residential.jpg',
                'jeddah-suburbs-moving.jpg'
            ],
            
            // Technology and solutions
            solutions: [
                'furniture_moving_solutions_jeddah_ksa.jpg',
                'furniture_finding_services_jeddah_experts.jpg'
            ],
            
            // Tips and advice
            tips: [
                'cost-saving-tips.jpg',
                'best-moving-times.jpg',
                'negotiating-prices.jpg',
                'red-flags-moving.jpg',
                'diy-vs-professional.jpg',
                'furniture-insurance.jpg',
                'furniture-storage-guide.jpg'
            ],
            
            // Reports and statistics
            reports: [
                'jeddah-market-report-2024.jpg',
                'companies-performance-analysis.jpg',
                'pricing-statistics-2024.jpg',
                'customer-satisfaction-survey.jpg',
                'future-moving-industry-jeddah.jpg'
            ],
            
            // Family and special cases
            family: [
                'family-moving-guide.jpg',
                'seniors-moving-guide.jpg',
                'valuable-items-protection.jpg',
                'moving-preparation-guide.jpg',
                'moving-day-checklist.jpg'
            ],
            
            // Special cases
            special: [
                'flat_screen_tv_transport_jeddah.jpg',
                'domestic_violence_support_movers_jeddah.jpg',
                'bidding_war_moving_services_jeddah.jpg'
            ],
            
            // Generic furniture moving
            generic: [
                'furniture_moving_company_jeddah_ksa.jpg',
                'furniture_relocation_company_jeddah.jpg',
                'furniture_moving_specialists_jeddah_saudi.jpg'
            ]
        };
    }

    /**
     * Get appropriate image based on article category and keywords
     * @param {string} category - Article category (guides, tips, areas, reports)
     * @param {Array} keywords - Array of keywords from article content
     * @param {string} fallbackType - Fallback image type if specific match not found
     * @returns {string} Image path
     */
    getImageForArticle(category, keywords = [], fallbackType = 'services') {
        const keywordMap = {
            // Cost-related keywords
            'توفير': 'affordable',
            'اقتصادي': 'affordable',
            'رخيص': 'affordable',
            'تكلفة': 'affordable',
            'سعر': 'affordable',
            'خصم': 'affordable',
            
            // Packing-related keywords
            'تغليف': 'packing',
            'حماية': 'packing',
            'تعبئة': 'packing',
            'صناديق': 'packing',
            
            // Equipment-related keywords
            'شاحنة': 'trucks',
            'نقل': 'trucks',
            'مركبة': 'trucks',
            'أسطول': 'trucks',
            
            // Service-related keywords
            'خدمة': 'services',
            'محترف': 'services',
            'خبير': 'services',
            'متخصص': 'services',
            
            // Area-related keywords
            'جدة': 'areas',
            'حي': 'areas',
            'منطقة': 'areas',
            'شمال': 'areas',
            'جنوب': 'areas',
            
            // Specialized services
            'تركيب': 'specialized',
            'فك': 'specialized',
            'تجاري': 'specialized',
            'مكتب': 'specialized'
        };

        // Check keywords for specific image type
        for (const keyword of keywords) {
            if (keywordMap[keyword]) {
                const imageType = keywordMap[keyword];
                if (this.imageDatabase[imageType] && this.imageDatabase[imageType].length > 0) {
                    return this.selectRandomImage(imageType);
                }
            }
        }

        // Category-based selection
        switch (category) {
            case 'tips':
                return this.selectRandomImage('affordable');
            case 'guides':
                return this.selectRandomImage('services');
            case 'areas':
                return this.selectRandomImage('areas');
            case 'reports':
                return this.selectRandomImage('specialized');
            default:
                return this.selectRandomImage(fallbackType);
        }
    }

    /**
     * Select a random image from a specific category
     * @param {string} category - Image category
     * @returns {string} Image path
     */
    selectRandomImage(category) {
        const images = this.imageDatabase[category] || this.imageDatabase['services'];
        const randomIndex = Math.floor(Math.random() * images.length);
        return this.baseImagePath + images[randomIndex];
    }

    /**
     * Get author image based on author name
     * @param {string} authorName - Author's name
     * @returns {string} Author image path
     */
    getAuthorImage(authorName) {
        const authorMap = {
            'علي أحمد الغامدي': 'ali_ahmed_alghamdi.png',
            'عائشة علي الجهني': 'aisha_ali_aljehani.png',
            'عبدالله علي الجهني': 'abdullah_ali_aljehani.png',
            'أحمد محمد السعودي': 'ahmed_mohammed_alsaudi.png'
        };

        const authorImage = authorMap[authorName] || 'ali_ahmed_alghamdi.png';
        return this.authorImagePath + authorImage;
    }

    /**
     * Get multiple related images for a gallery
     * @param {string} category - Article category
     * @param {number} count - Number of images needed
     * @param {Array} keywords - Keywords for context
     * @returns {Array} Array of image objects with path and caption
     */
    getImageGallery(category, count = 3, keywords = []) {
        const images = [];
        const usedImages = new Set();

        // Define captions for different types of images
        const captions = {
            'furniture_moving_services_jeddah_professionals.jpg': 'خدمات نقل العفش المهنية في جدة',
            'affordable_moving_company_jeddah_saudi_arabia.jpg': 'شركة نقل عفش اقتصادية وموثوقة',
            'furniture_packing_moving_jeddah.jpg': 'خدمات تغليف الأثاث المتخصصة',
            'furniture_protection_moving_jeddah.jpg': 'حماية الأثاث أثناء النقل',
            'furniture_moving_trucks_jeddah.jpg': 'أسطول متطور من شاحنات النقل',
            'business_relocation_experts_jeddah_ksa.jpg': 'خبراء نقل المكاتب والشركات',
            'furniture_assembly_service_jeddah_experts.jpg': 'خدمات فك وتركيب الأثاث',
            'expert_furniture_movers_jeddah.jpg': 'فريق خبراء نقل الأثاث'
        };

        // Get images from different categories to ensure variety
        const categories = Object.keys(this.imageDatabase);
        
        for (let i = 0; i < count && categories.length > 0; i++) {
            let selectedImage;
            let attempts = 0;
            
            do {
                const randomCategory = categories[Math.floor(Math.random() * categories.length)];
                const categoryImages = this.imageDatabase[randomCategory];
                const randomImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
                selectedImage = randomImage;
                attempts++;
            } while (usedImages.has(selectedImage) && attempts < 20);
            
            if (!usedImages.has(selectedImage)) {
                usedImages.add(selectedImage);
                images.push({
                    path: this.baseImagePath + selectedImage,
                    caption: captions[selectedImage] || 'خدمات نقل العفش في جدة',
                    alt: captions[selectedImage] || 'نقل العفش جدة'
                });
            }
        }

        return images;
    }

    /**
     * Get optimized image based on context and usage
     * @param {Object} context - Context object with article info
     * @returns {Object} Image object with path, alt text, and caption
     */
    getOptimizedImage(context = {}) {
        const {
            category = 'services',
            title = '',
            keywords = [],
            usage = 'featured', // featured, thumbnail, gallery, inline
            preferredType = null
        } = context;

        // Extract keywords from title
        const titleKeywords = this.extractKeywords(title);
        const allKeywords = [...keywords, ...titleKeywords];

        // Get appropriate image
        const imagePath = preferredType 
            ? this.selectRandomImage(preferredType)
            : this.getImageForArticle(category, allKeywords);

        // Generate appropriate alt text and caption
        const altText = this.generateAltText(title, category, allKeywords);
        const caption = this.generateCaption(category, allKeywords);

        return {
            path: imagePath,
            alt: altText,
            caption: caption,
            category: category,
            keywords: allKeywords
        };
    }

    /**
     * Extract keywords from Arabic text
     * @param {string} text - Arabic text to analyze
     * @returns {Array} Array of relevant keywords
     */
    extractKeywords(text) {
        const keywords = [];
        const keywordPatterns = [
            'توفير', 'اقتصادي', 'رخيص', 'تكلفة', 'سعر',
            'تغليف', 'حماية', 'تعبئة', 'صناديق',
            'شاحنة', 'نقل', 'مركبة', 'أسطول',
            'خدمة', 'محترف', 'خبير', 'متخصص',
            'جدة', 'حي', 'منطقة', 'شمال', 'جنوب',
            'تركيب', 'فك', 'تجاري', 'مكتب'
        ];

        keywordPatterns.forEach(pattern => {
            if (text.includes(pattern)) {
                keywords.push(pattern);
            }
        });

        return keywords;
    }

    /**
     * Generate appropriate alt text for SEO
     * @param {string} title - Article title
     * @param {string} category - Article category
     * @param {Array} keywords - Relevant keywords
     * @returns {string} SEO-optimized alt text
     */
    generateAltText(title, category, keywords) {
        const baseAlt = 'نقل العفش في جدة';
        
        if (keywords.includes('توفير') || keywords.includes('اقتصادي')) {
            return 'شركة نقل عفش اقتصادية في جدة';
        }
        
        if (keywords.includes('تغليف') || keywords.includes('حماية')) {
            return 'تغليف وحماية الأثاث أثناء النقل في جدة';
        }
        
        if (keywords.includes('محترف') || keywords.includes('خبير')) {
            return 'خدمات نقل العفش المهنية في جدة';
        }

        if (category === 'tips') {
            return 'نصائح نقل العفش في جدة';
        }

        return baseAlt;
    }

    /**
     * Generate appropriate caption
     * @param {string} category - Article category
     * @param {Array} keywords - Relevant keywords
     * @returns {string} Image caption
     */
    generateCaption(category, keywords) {
        if (keywords.includes('توفير')) {
            return 'خيارات اقتصادية لنقل العفش';
        }
        
        if (keywords.includes('تغليف')) {
            return 'تغليف احترافي لحماية الأثاث';
        }
        
        if (keywords.includes('شاحنة')) {
            return 'أسطول حديث من شاحنات النقل';
        }

        return 'خدمات نقل العفش المتخصصة';
    }

    /**
     * Preload images for better performance
     * @param {Array} imagePaths - Array of image paths to preload
     */
    preloadImages(imagePaths) {
        imagePaths.forEach(path => {
            const img = new Image();
            img.src = path;
        });
    }

    /**
     * Get responsive image sources for different screen sizes
     * @param {string} imagePath - Base image path
     * @returns {Object} Object with different image sizes
     */
    getResponsiveImages(imagePath) {
        // In a real implementation, you would have different sizes
        return {
            small: imagePath, // 400px width
            medium: imagePath, // 800px width  
            large: imagePath, // 1200px width
            original: imagePath
        };
    }
}

// Initialize global image manager
const imageManager = new ImageManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageManager;
} else {
    window.ImageManager = ImageManager;
    window.imageManager = imageManager;
}

// Utility functions for easy access
window.getArticleImage = function(category, keywords, fallbackType) {
    return imageManager.getImageForArticle(category, keywords, fallbackType);
};

window.getAuthorImage = function(authorName) {
    return imageManager.getAuthorImage(authorName);
};

window.getImageGallery = function(category, count, keywords) {
    return imageManager.getImageGallery(category, count, keywords);
};

window.getOptimizedImage = function(context) {
    return imageManager.getOptimizedImage(context);
}; 