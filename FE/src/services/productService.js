import imgEnglish from '../assets/images/a_modern_english_c_image_.png';
import imgIELTS from '../assets/images/a_classroom_settin_image_.png';
import imgPython from '../assets/images/a_modern_python_pr_image_.png';
import imgJapanese from '../assets/images/a_modern_japanese_image_.png';
import imgClassroom1 from '../assets/images/a_classroom_settin_image_ (1).png';
import imgClassroom2 from '../assets/images/a_classroom_settin_image_ (2).png';
import imgClassroom3 from '../assets/images/a_classroom_settin_image_ (3).png';
import imgModernClassroom from '../assets/images/a_modern_classroom_image_.png';
import imgModernClassroom1 from '../assets/images/a_modern_classroom_image_ (1).png';
import imgVibrantClassroom from '../assets/images/a_vibrant_classroo_image_.png';
import imgModernProgramming from '../assets/images/a_modern_programmi_image_.png';
import imgModernProgramming1 from '../assets/images/a_modern_programmi_image_ (1).png';

// Mock data sản phẩm với các trường dữ liệu mới
const mockProducts = [
    {
        id: 1,
        name: "Lớp tiếng Anh giao tiếp",
        price: 800000,
        image: imgEnglish,
        shortDesc: "Học tiếng Anh với giáo viên bản xứ.",
        longDesc: "Khóa học tiếng Anh giao tiếp với giáo viên bản xứ, giúp bạn tự tin nói chuyện trong mọi tình huống.",
        rating: 4.8,
        category: "Ngôn ngữ",
        level: "Cơ bản",
        duration: "3 tháng",
        instructor: "John Smith",
        schedule: "Thứ 3,5,7 (18:00-20:00)",
        enrolled: 124,
        discount: 0.1,
        requirements: "Trình độ A2 trở lên",
        lessons: 36,
        certificate: true,
        language: "Tiếng Anh",
        targetAudience: "Người đi làm, sinh viên"
    },
    {
        id: 2,
        name: "Giáo trình luyện thi IELTS",
        price: 350000,
        image: imgIELTS,
        shortDesc: "Tài liệu luyện thi IELTS từ 0-7.5.",
        longDesc: "Bộ giáo trình luyện thi IELTS đầy đủ kỹ năng, phù hợp cho người mới bắt đầu đến nâng cao.",
        rating: 4.6,
        category: "Tài liệu",
        level: "Mọi trình độ",
        duration: "Tự học",
        instructor: "IELTS Team",
        enrolled: 2100,
        discount: 0.15,
        pages: 320,
        publisher: "NXB Giáo dục",
        audioMaterials: true,
        examTips: true,
        practiceTests: 8
    },
    {
        id: 3,
        name: "Khóa học lập trình Python",
        price: 1200000,
        image: imgPython,
        shortDesc: "Từ cơ bản đến nâng cao, thực chiến dự án.",
        longDesc: "Khóa học lập trình Python với dự án thực tế, mentor hỗ trợ 1-1, tài liệu cập nhật mới nhất.",
        rating: 4.9,
        category: "Công nghệ",
        level: "Cơ bản",
        duration: "4 tháng",
        instructor: "Alex Johnson",
        schedule: "Thứ 2,4,6 (19:00-21:00)",
        enrolled: 87,
        projects: 5,
        certificate: true,
        tools: "PyCharm, Jupyter Notebook",
        prerequisites: "Cơ bản về máy tính",
        careerSupport: true
    },
    {
        id: 4,
        name: "Lớp học tiếng Nhật N5",
        price: 600000,
        image: imgJapanese,
        shortDesc: "Học tiếng Nhật cho người mới bắt đầu.",
        longDesc: "Lớp học tiếng Nhật N5 với giáo viên nhiều năm kinh nghiệm, giáo trình chuẩn JLPT.",
        rating: 4.7,
        category: "Ngôn ngữ",
        level: "Nhập môn",
        duration: "2.5 tháng",
        instructor: "Yuki Tanaka",
        schedule: "Thứ 3,5,CN (17:30-19:30)",
        enrolled: 92,
        materials: "Minna no Nihongo",
        culturalSessions: true,
        kanjiLessons: 50,
        conversationPractice: true
    },
    {
        id: 5,
        name: "Tài liệu Toán tư duy",
        price: 200000,
        image: imgClassroom1,
        shortDesc: "Tài liệu phát triển tư duy logic cho trẻ.",
        longDesc: "Bộ tài liệu Toán tư duy cho trẻ từ 5-12 tuổi, giúp phát triển khả năng logic và sáng tạo.",
        rating: 4.5,
        category: "Toán học",
        level: "Trẻ em",
        duration: "Tự học",
        enrolled: 450,
        discount: 0.05,
        ageGroup: "5-12 tuổi",
        exercises: 150,
        answerKey: true,
        interactiveElements: true,
        skillFocus: "Logic, Sáng tạo"
    },
    {
        id: 6,
        name: "Lớp học STEM sáng tạo",
        price: 950000,
        image: imgClassroom2,
        shortDesc: "Khóa học STEM cho trẻ em, thực hành sáng tạo.",
        longDesc: "Khóa học STEM giúp trẻ phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề qua các dự án thực tế.",
        rating: 4.7,
        category: "STEM",
        level: "Trung cấp",
        duration: "3 tháng",
        instructor: "Dr. Minh Trí",
        schedule: "Thứ 7, CN (9:00-11:00)",
        enrolled: 68,
        kitIncluded: true,
        experiments: 12,
        ageGroup: "8-15 tuổi",
        teamProjects: true,
        scienceFair: true
    },
    {
        id: 7,
        name: "Lớp học Khoa học vui",
        price: 700000,
        image: imgClassroom3,
        shortDesc: "Khám phá khoa học qua thí nghiệm thực tế.",
        longDesc: "Lớp học khoa học vui với nhiều thí nghiệm hấp dẫn, giúp trẻ yêu thích và hiểu sâu về khoa học tự nhiên.",
        rating: 4.6,
        category: "Khoa học",
        level: "Nhập môn",
        duration: "2 tháng",
        instructor: "TS. Lan Anh",
        schedule: "Thứ 4,6 (18:00-19:30)",
        enrolled: 75,
        labAccess: true,
        safetyCertified: true,
        topics: ["Vật lý", "Hóa học", "Sinh học"],
        takeHomeKits: true
    },
    {
        id: 8,
        name: "Khóa học Lập trình Scratch",
        price: 500000,
        image: imgModernProgramming,
        shortDesc: "Lập trình cho trẻ em với Scratch.",
        longDesc: "Khóa học lập trình Scratch giúp trẻ phát triển tư duy logic, sáng tạo và kỹ năng giải quyết vấn đề qua các dự án lập trình đơn giản.",
        rating: 4.8,
        category: "Lập trình",
        level: "Trẻ em",
        duration: "2 tháng",
        instructor: "Nguyễn Văn Tài",
        schedule: "Thứ 7 (14:00-16:00)",
        enrolled: 120,
        ageGroup: "8-16 tuổi",
        projects: 8,
        parentReports: true,
        codingConcepts: ["Biến", "Vòng lặp", "Điều kiện"],
        finalProject: true
    },
    {
        id: 9,
        name: "Khóa học Lập trình Web cơ bản",
        price: 1100000,
        image: imgModernProgramming1,
        shortDesc: "Học HTML, CSS, JavaScript từ đầu.",
        longDesc: "Khóa học lập trình web cơ bản dành cho người mới bắt đầu, thực hành xây dựng website cá nhân.",
        rating: 4.7,
        category: "Công nghệ",
        level: "Cơ bản",
        duration: "3 tháng",
        instructor: "Trần Quốc Bảo",
        schedule: "Thứ 3,5,7 (19:00-21:00)",
        enrolled: 105,
        tools: "VS Code, Chrome DevTools",
        portfolioProject: true,
        technologies: ["HTML5", "CSS3", "JavaScript"],
        mentorship: true,
        jobPrep: true
    },
    {
        id: 10,
        name: "Lớp học Tiếng Anh thiếu nhi",
        price: 650000,
        image: imgModernClassroom,
        shortDesc: "Tiếng Anh giao tiếp cho trẻ em.",
        longDesc: "Lớp học tiếng Anh thiếu nhi với giáo viên nước ngoài, phương pháp học qua trò chơi và hoạt động nhóm.",
        rating: 4.9,
        category: "Ngôn ngữ",
        level: "Trẻ em",
        duration: "3 tháng",
        instructor: "Sarah Johnson",
        schedule: "Thứ 2,4,6 (17:30-19:00)",
        enrolled: 150,
        ageGroup: "4-10 tuổi",
        games: 20,
        parentSession: true,
        storytelling: true,
        musicActivities: true
    },
    {
        id: 11,
        name: "Lớp học Toán nâng cao",
        price: 800000,
        image: imgModernClassroom1,
        shortDesc: "Toán nâng cao cho học sinh khá giỏi.",
        longDesc: "Lớp học toán nâng cao giúp học sinh phát triển tư duy logic, giải quyết các bài toán khó và chuẩn bị cho các kỳ thi học sinh giỏi.",
        rating: 4.8,
        category: "Toán học",
        level: "Nâng cao",
        duration: "4 tháng",
        instructor: "PGS. Hùng Minh",
        schedule: "Thứ 2,4,6 (18:00-20:00)",
        enrolled: 85,
        competitions: true,
        olympiadPrep: true,
        difficultyLevel: "Cao",
        problemSets: 200,
        solutionGuides: true
    },
    {
        id: 12,
        name: "Lớp học Kỹ năng sống",
        price: 400000,
        image: imgVibrantClassroom,
        shortDesc: "Phát triển kỹ năng mềm cho trẻ.",
        longDesc: "Lớp học kỹ năng sống giúp trẻ tự tin, giao tiếp tốt, làm việc nhóm và giải quyết vấn đề hiệu quả qua các hoạt động thực tế.",
        rating: 4.7,
        category: "Kỹ năng",
        level: "Cơ bản",
        duration: "2 tháng",
        instructor: "Chuyên gia Tâm lý Mai Linh",
        schedule: "Thứ 7 (9:00-12:00)",
        enrolled: 110,
        skills: ["Giao tiếp", "Làm việc nhóm", "Giải quyết vấn đề"],
        outdoorActivities: true,
        ageGroup: "7-15 tuổi",
        confidenceBuilding: true,
        parentWorkshops: true
    }
];

export const fetchProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts), 600);
    });
};

export const fetchSuggestions = (userId, favorites = [], cart = []) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) return reject();
            const favIds = favorites.map((f) => f.id);
            const cartIds = cart.map((c) => c.id);
            const suggestions = mockProducts.filter((p) => !favIds.includes(p.id) && !cartIds.includes(p.id));
            let advanced = [];
            if (cart.length > 0) {
                const cartKeywords = cart.map((c) => c.name.split(" ")[0].toLowerCase());
                advanced = suggestions.filter((p) => cartKeywords.some((k) => p.name.toLowerCase().includes(k)));
            }
            resolve((advanced.length ? advanced : suggestions).slice(0, 3).concat(favorites.slice(0, 2)));
        }, 1200);
    });
};