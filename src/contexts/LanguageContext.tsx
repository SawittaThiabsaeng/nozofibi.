import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'th';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.about': 'About',
    'nav.features': 'Features',
    'nav.support': 'Support',
    'nav.try': 'Try Nozofibi',
    
    // Hero
    'hero.badge': 'Focus better, your way',
    'hero.title1': 'Find',
    'hero.title2': 'Your',
    'hero.title3': 'Focus,',
    'hero.title4': 'Naturally',
    'hero.desc': 'Nozofibi helps you focus better by understanding your feelings before you work. Good focus doesn\'t come from forcing—it starts with knowing your internal state.',
    'hero.cta': 'Start Focusing',
    'hero.avail': 'Available on:',
    'hero.trust': 'Designed for students and mindful productivity.',
    'hero.widget.protocol': 'FOCUS PROTOCOL',
    'hero.widget.title': 'Ready to focus?',
    'hero.widget.desc': 'Improve your focus by checking your emotional state.',
    'hero.widget.start': 'Start session',
    'hero.widget.today': 'Current Mood',
    'hero.widget.nomood': 'No mood entry for today yet.',
    'hero.widget.checknow': 'Check in',
    'hero.widget.history': 'View History',
    'hero.widget.streak': 'Streak',

    // Why Nozofibi
    'why.eyebrow': 'Inner Balance',
    'why.title': 'Why is it hard to focus sometimes?',
    'why.content1': 'Focus problems aren\'t always about distractions; they often start from your internal state.',
    'why.content2': 'When you\'re tired or stressed, forcing focus only makes work harder.',
    'why.content3': 'Nozofibi helps you check-in before you work, allowing you to adjust your pace and focus naturally.',

    // Experience
    'exp.eyebrow': 'Mindful Check-in',
    'exp.title': 'Focus with self-understanding',
    'exp.desc': 'Try checking in with your feelings now to see how ready you are for your next session.',
    'exp.prompt': 'Identify your current state:',
    'exp.analytics.title': 'Emotion Analytics',
    'exp.analytics.introTitle': 'Emotion analytics page (separate from Insights)',
    'exp.analytics.introDesc': 'This page is dedicated to mood-based focus insights and is kept separate from the existing analytics page.',
    'exp.analytics.startQuiz': 'Start Emotion Quiz',
    'exp.analytics.openLog': 'Open Mood Log',
    'exp.analytics.currentMood': 'Current Mood',
    'exp.analytics.moods7d': 'Mood check-ins (7D)',
    'exp.analytics.sessions7d': 'Sessions (7D)',
    'exp.analytics.noMood': 'No current mood yet. Try your first Emotion Quiz.',
    'exp.res.title': 'Ready to start focusing',
    'exp.res.checked': 'Mindset Set',
    'exp.res.random': 'Check Again',
    'exp.res.back': 'Back',

    // Moods
    'mood.happy': 'Happy',
    'mood.excited': 'Excited',
    'mood.love': 'Love',
    'mood.focused': 'Focused',
    'mood.calm': 'Calm',
    'mood.motivated': 'Motivated',
    'mood.bored': 'Bored',
    'mood.sleepy': 'Sleepy',
    'mood.neutral': 'Neutral',
    'mood.stressed': 'Stressed',
    'mood.trying': 'Trying',
    'mood.sad': 'Sad',

    // Mood Messages for Experience
    'exp.msg.happy': 'Great energy! Use this positivity to fuel your goals.',
    'exp.msg.excited': 'Channel this excitement into your passions!',
    'exp.msg.proud': 'You\'ve come far. Celebrate your progress and keep going.',
    'exp.msg.focused': 'Ready for deep work. Let\'s maintain this flow.',
    'exp.msg.relaxed': 'Work feels lighter when you\'re at ease.',
    'exp.msg.challenged': 'Growth happens at the edge. You\'ve got this.',
    'exp.msg.bored': 'Maybe it\'s time for a small, fun challenge?',
    'exp.msg.tired': 'It\'s okay to slow down. Rest is part of the work.',
    'exp.msg.distracted': 'Take a deep breath. Focus on one small thing first.',
    'exp.msg.stress': 'One step at a time. Your pace is okay.',
    'exp.msg.anxious': 'You are safe. Focus on your breathing for a moment.',
    'exp.msg.sad': 'Be gentle with yourself. We\'re here with you.',

    // Emotion Visuals Section
    'viz.eyebrow': 'Focus Support',
    'viz.title': 'Emotion-Led Focus Support',
    'viz.desc': 'Nozofibi uses soft visuals and colors to reflect your state, helping you understand yourself better before you dive into deep work.',

    // Focus Highlight Section
    'focus.eyebrow': 'Live Experience',
    'focus.title': 'The most mindful way to deep focus',
    'focus.desc': 'Nozofibi isn\'t just a timer. It\'s a workspace that respects your mental energy, showing you exactly how much progress you\'ve made without causing anxiety.',
    'focus.stats.sessions': '3 sessions today',
    'focus.stats.hours': '2.5h focused',
    'focus.status.active': 'Deep Focus Session',
    'focus.task': 'Stay with your flow',
    'focus.cta.start': 'Start Focus',
    'focus.cta.pause': 'Pause session',
    'focus.timer.total': '25:00',
    'focus.timer.current': '10:42',
    
    // Features Section
    'features.title1': 'Focus Tools that',
    'features.title2': 'Adapt to You',
    'features.desc': 'Designed to help you enter focus mode easier by considering your state in each moment.',
    'features.timer.title': 'Focus Timer',
    'features.timer.desc': 'Start work with a timing system that keeps you focused without the pressure.',
    'features.mood.title': 'Pre-Focus Check-in',
    'features.mood.desc': 'A short ritual to assess your readiness before you begin work.',
    'features.result.title': 'Readiness Result',
    'features.result.desc': 'Get insights on your readiness along with messages to adjust your mindset.',
    'features.visuals.title': 'Visual Support',
    'features.visuals.desc': 'Soft, calming visuals unique to Nozofibi that help you acknowledge your state.',

    // How It Works
    'how.title': 'Start Focusing in 3 Steps',
    'how.step1.title': 'Check-in Before Starting',
    'how.step1.desc': 'Answer a few short questions to understand your current internal state.',
    'how.step2.title': 'See Focus Readiness',
    'how.step2.desc': 'Get your result and adjust your mindset to match your work goals.',
    'how.step3.title': 'Start Focusing',
    'how.step3.desc': 'Enter your deep work session using the Focus Timer with full awareness.',

    // Screenshots
    'screens.eyebrow': 'App Experience',
    'screens.title1': 'Explore the',
    'screens.title2': 'Nozofibi',
    'screens.title3': 'World.',
    'screens.desc': 'Scroll through the library to see how we designed everything to be soft and supportive.',
    'screens.hint': 'Drag or click the arrows to explore.',
    'screens.home.title': 'Home',
    'screens.home.desc': 'Your daily focus & mood dashboard',
    'screens.timer.title': 'Timer',
    'screens.timer.desc': 'Stay focused with Pomodoro',
    'screens.schedule.title': 'Schedule',
    'screens.schedule.desc': 'Organize your routine',
    'screens.insights.title': 'Insights',
    'screens.insights.desc': 'Track your progress over time',
    'screens.profile.title': 'Profile',
    'screens.profile.desc': 'Personalize your journey',

    // Mockups
    'mock.home': 'Home',
    'mock.timer': 'Timer',
    'mock.schedule': 'Schedule',
    'mock.insights': 'Insights',
    'mock.profile': 'Profile',
    'mock.emotionAnalytics': 'Emotion Analytics',
    'mock.insightsPill': 'INSIGHTS',
    'mock.trackMood': 'Track your mood and mental well-being.',
    'mock.viewAnalysis': 'View Analysis',
    'mock.todaysMood': 'Today\'s Mood',
    'mock.noCheckIn': 'No mood check-in yet. Start your first mood check-in today.',
    'mock.checkMoodNow': 'Check Mood Now',
    'mock.history': 'History',
    'mock.wellnessMetrics': 'Wellness Metrics',
    'mock.today': 'TODAY',
    'mock.streak': 'STREAK',
    'mock.focus7d': 'FOCUS 7D',
    'mock.done7d': 'DONE 7D',
    'mock.pomodoroProtocol': 'Pomodoro Protocol',
    'mock.custom': 'Custom',
    'mock.reading': 'Reading',
    'mock.gym': 'Gym Session',
    'mock.math': 'Math Quiz',
    'mock.editProfile': 'Edit Profile',
    'mock.accountSettings': 'Account Settings',
    'mock.darkMode': 'Dark Mode',
    'mock.favorites': 'Favorites',
    'mock.premium': 'Premium Version',
    'mock.exportData': 'Export Data',
    'mock.signOut': 'Sign Out',
    'mock.currentStreak': 'Current streak: 0 day(s)',
    'mock.systemSettings': 'System Settings',

    // CTA
    'cta.eyebrow': 'Get Started',
    'cta.title': 'Are you ready to focus on what matters to you?',
    'cta.desc': 'Start working with self-understanding and focus more naturally.',
    'cta.primary': 'Try Nozofibi',
    'cta.secondary': 'Start your journey',
    
    // Footer
    'footer.tagline': 'Your productive and balanced workspace companion.',
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.integrations': 'Integrations',
    'footer.pricing': 'Pricing',
    'footer.changelog': 'Changelog',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.blog': 'Blog',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookie': 'Cookie Policy',
    'footer.rights': '© 2026 Nozofibi. All rights reserved.',
  },
  th: {
    // Navbar
    'nav.about': 'เกี่ยวกับ',
    'nav.features': 'ฟีเจอร์',
    'nav.support': 'ช่วยเหลือ',
    'nav.try': 'ลองใช้ Nozofibi',
    
    // Hero
    'hero.badge': 'โฟกัสได้ดีขึ้น ในแบบที่เป็นคุณ',
    'hero.title1': 'โฟกัส',
    'hero.title2': 'ได้ลึกขึ้น',
    'hero.title3': 'อย่าง',
    'hero.title4': 'เป็นธรรมชาติ',
    'hero.desc': 'Nozofibi คือแอปที่ช่วยให้คุณโฟกัสได้ดีขึ้น โดยเริ่มจากการเข้าใจความรู้สึกของตัวเองก่อนเริ่มงาน เพราะการโฟกัสที่ดี ไม่ได้มาจากการฝืน แต่เริ่มจากการรู้ว่า “ตอนนี้คุณอยู่ในสภาวะแบบไหน”',
    'hero.cta': 'เริ่มโฟกัสเลย',
    'hero.avail': 'รองรับใน:',
    'hero.trust': 'ออกแบบมาสำหรับนักเรียนและคนทำงานที่ต้องการสมาธิอย่างมีสติ',
    'hero.widget.protocol': 'โหมดโฟกัส',
    'hero.widget.title': 'พร้อมโฟกัสหรือยัง?',
    'hero.widget.desc': 'เพิ่มสมาธิของคุณโดยการตรวจสอบสภาพอารมณ์',
    'hero.widget.start': 'เริ่มเซสชัน',
    'hero.widget.today': 'อารมณ์ปัจจุบัน',
    'hero.widget.nomood': 'ยังไม่มีรายการอารมณ์สำหรับวันนี้',
    'hero.widget.checknow': 'เช็คอิน',
    'hero.widget.history': 'ดูประวัติ',
    'hero.widget.streak': 'ทำต่อเนื่อง',

    // Why Nozofibi
    'why.eyebrow': 'สมดุลภายใน',
    'why.title': 'ทำไมบางครั้งเราถึงโฟกัสไม่ได้?',
    'why.content1': 'ปัญหาการโฟกัส ไม่ได้เกิดจากสิ่งรบกวนภายนอกเสมอไป แต่เกิดจากสภาวะภายในใจของคุณ',
    'why.content2': 'ในวันที่คุณเหนื่อย เครียด หรือไม่มีแรง การฝืนโฟกัส อาจยิ่งทำให้ทำงานได้แย่ลง',
    'why.content3': 'Nozofibi ช่วยให้คุณเช็คอินความรู้สึกก่อนเริ่มงาน เพื่อให้คุณปรับจังหวะ และโฟกัสได้ดีขึ้นในแบบที่เป็นธรรมชาติ',

    // Experience
    'exp.eyebrow': 'เช็คอินอย่างมีสติ',
    'exp.title': 'เริ่มโฟกัส ด้วยความเข้าใจตัวเอง',
    'exp.desc': 'ลองเช็คอินความรู้สึกของคุณตอนนี้ เพื่อดูว่าคุณพร้อมแค่ไหนสำหรับการโฟกัส',
    'exp.prompt': 'สภาวะภายในใจของคุณตอนนี้:',
    'exp.analytics.title': 'การวิเคราะห์อารมณ์',
    'exp.analytics.introTitle': 'หน้าวิเคราะห์อารมณ์ (แยกจาก Insights เดิม)',
    'exp.analytics.introDesc': 'หน้านี้จะแสดงข้อมูลอารมณ์ที่ผูกกับการโฟกัส โดยไม่รวมกับหน้า Analytics เดิม',
    'exp.analytics.startQuiz': 'เริ่ม Emotion Quiz',
    'exp.analytics.openLog': 'ดูประวัติอารมณ์',
    'exp.analytics.currentMood': 'อารมณ์ล่าสุด',
    'exp.analytics.moods7d': 'เช็กอินอารมณ์ 7 วัน',
    'exp.analytics.sessions7d': 'เซสชัน 7 วัน',
    'exp.analytics.noMood': 'ยังไม่มีอารมณ์ล่าสุด ลองทำ Emotion Quiz ครั้งแรกของคุณ',
    'exp.res.title': 'คุณพร้อมเริ่มโฟกัสแล้ว',
    'exp.res.checked': 'เตรียมใจพร้อม',
    'exp.res.random': 'เช็คอีกครั้ง',
    'exp.res.back': 'กลับ',

    // Moods
    'mood.happy': 'Happy',
    'mood.excited': 'Excited',
    'mood.love': 'Love',
    'mood.focused': 'Focused',
    'mood.calm': 'Calm',
    'mood.motivated': 'Motivated',
    'mood.bored': 'Bored',
    'mood.sleepy': 'Sleepy',
    'mood.neutral': 'Neutral',
    'mood.stressed': 'Stressed',
    'mood.trying': 'Trying',
    'mood.sad': 'Sad',

    // ข้อความอารมณ์สำหรับ Experience
    'exp.msg.happy': 'พลังงานดีมาก! ใช้ความรู้สึกนี้ขับเคลื่อนเป้าหมายของคุณ',
    'exp.msg.excited': 'เปลี่ยนความตื่นเต้นนี้ให้เป็นพลังสร้างสรรค์กัน!',
    'exp.msg.proud': 'คุณมาไกลมากแล้วนะ ชื่นชมความพยายามของตัวเองแล้วไปต่อกัน',
    'exp.msg.focused': 'สภาวะของคุณเหมาะกับการทำงานในตอนนี้ ลองเริ่มช่วงเวลาการโฟกัสได้เลย',
    'exp.msg.relaxed': 'งานจะดูเบาลง เมื่อคุณทำมันด้วยความรู้สึกผ่อนคลาย',
    'exp.msg.challenged': 'ความท้าทายคือโอกาสในการเติบโต คุณทำได้แน่นอน!',
    'exp.msg.bored': 'ลองหาความท้าทายเล็กๆ สนุกๆ ทำดูไหม?',
    'exp.msg.tired': 'เหนื่อยก็แค่พัก การพักผ่อนคือส่วนหนึ่งของความสำเร็จนะ',
    'exp.msg.distracted': 'หายใจเข้าลึกๆ ลองเริ่มจากสิ่งเล็กๆ ตรงหน้าก่อนนะ',
    'exp.msg.stress': 'ค่อยๆ ทำไปทีละอย่างนะ จังหวะของคุณดีที่สุดแล้ว',
    'exp.msg.anxious': 'คุณปลอดภัยนะ ลองจดจ่อกับการหายใจสักครู่หนึ่ง',
    'exp.msg.sad': 'ใจดีกับตัวเองหน่อยนะ เราอยู่ข้างๆ คุณเสมอ',

    // Emotion Visuals Section
    'viz.eyebrow': 'สนับสนุนการโฟกัส',
    'viz.title': 'ระบบสนับสนุนการโฟกัสผ่านอารมณ์',
    'viz.desc': 'Nozofibi ใช้ภาพและสีเพื่อสะท้อนสภาวะของคุณ ช่วยให้คุณเข้าใจตัวเองได้ง่ายขึ้นก่อนเริ่มโฟกัส ออกแบบมาให้นุ่มนวล ไม่กดดัน เพื่อให้การทำงานของคุณเป็นไปอย่างสมดุล',

    // Focus Highlight Section
    'focus.eyebrow': 'ประสบการณ์จริง',
    'focus.title': 'วิธีโฟกัสที่เข้าใจสภาวะจิตใจที่สุด',
    'focus.desc': 'Nozofibi ไม่ใช่แค่แอปจับเวลา แต่เป็นพื้นที่ทำงานที่เคารพพลังงานในใจคุณ แสดงความก้าวหน้าอย่างชัดเจนโดยไม่สร้างความกดดันให้ตัวเอง',
    'focus.stats.sessions': '3 เซสชันวันนี้',
    'focus.stats.hours': 'โฟกัสแล้ว 2.5 ชม.',
    'focus.status.active': 'กำลังโฟกัสอย่างลึกซึ้ง',
    'focus.task': 'ออกแบบระบบดีไซน์',
    'focus.timer.total': '25:00',
    'focus.timer.current': '10:42',

    // Features Section
    'features.title1': 'เครื่องมือโฟกัส',
    'features.title2': 'ที่เข้าใจคุณมากขึ้น',
    'features.desc': 'ออกแบบมาเพื่อช่วยให้คุณเข้าสู่สมาธิได้ง่ายขึ้น โดยคำนึงถึงสภาวะของคุณในแต่ละช่วงเวลา',
    'features.timer.title': 'Focus Timer',
    'features.timer.desc': 'เริ่มช่วงเวลาการทำงานด้วยระบบจับเวลา ช่วยให้คุณโฟกัสได้ต่อเนื่องโดยไม่กดดัน',
    'features.mood.title': 'Pre-Focus Check-in',
    'features.mood.desc': 'เช็คอินความรู้สึกสั้น ๆ ก่อนเริ่มงาน เพื่อประเมินความพร้อมในการโฟกัส',
    'features.result.title': 'Focus Readiness',
    'features.result.desc': 'รับผลลัพธ์ที่บอกระดับความพร้อมของคุณ พร้อมข้อความช่วยปรับ mindset ก่อนเริ่มงาน',
    'features.visuals.title': 'Emotion Visual Support',
    'features.visuals.desc': 'ใช้ภาพและสีที่นุ่มนวล ช่วยให้คุณเข้าใจตัวเองได้ง่ายขึ้น',

    // How It Works
    'how.title': 'เริ่มต้นโฟกัสใน 3 ขั้นตอน',
    'how.step1.title': 'เช็คอินก่อนเริ่ม',
    'how.step1.desc': 'ตอบคำถามสั้น ๆ เพื่อเข้าใจสภาวะของตัวเอง',
    'how.step2.title': 'ดูความพร้อมในการโฟกัส',
    'how.step2.desc': 'รับผลลัพธ์และปรับ mindset ให้เหมาะกับการทำงาน',
    'how.step3.title': 'เริ่มโฟกัส',
    'how.step3.desc': 'เข้าสู่ช่วงเวลาการทำงานด้วย Focus Timer',

    // Screenshots
    'screens.eyebrow': 'ประสบการณ์ใช้งานแอป',
    'screens.title1': 'สำรวจ',
    'screens.title2': 'โลกของ Nozofibi',
    'screens.title3': '',
    'screens.desc': 'เลื่อนดูคลังภาพเพื่อดูว่าเราออกแบบทุกอย่างให้นุ่มนวลและสนับสนุนคุณอย่างไร',
    'screens.hint': 'ลากหรือคลิกที่ลูกศรเพื่อสำรวจ',
    'screens.home.title': 'หน้าแรก',
    'screens.home.desc': 'แดชบอร์ดโฟกัสและอารมณ์รายวันของคุณ',
    'screens.timer.title': 'นาฬิกาจับเวลา',
    'screens.timer.desc': 'จดจ่ออยู่เสมอด้วยระบบ Pomodoro',
    'screens.schedule.title': 'ตารางเวลา',
    'screens.schedule.desc': 'จัดระเบียบกิจวัตรของคุณ',
    'screens.insights.title': 'ข้อมูลเชิงลึก',
    'screens.insights.desc': 'ติดตามความคืบหน้าของคุณเมื่อเวลาผ่านไป',
    'screens.profile.title': 'โปรไฟล์',
    'screens.profile.desc': 'กำหนดเส้นทางส่วนตัวของคุณ',

    // Mockups
    'mock.home': 'หน้าแรก',
    'mock.timer': 'จับเวลา',
    'mock.schedule': 'ตารางเวลา',
    'mock.insights': 'ข้อมูลเชิงลึก',
    'mock.profile': 'โปรไฟล์',
    'mock.deepFocus': 'ช่วงเวลาโฟกัสเข้มข้น',
    'mock.focusProtocol': 'โหมดโฟกัส',
    'mock.readyProductive': 'พร้อมสำหรับช่วงเวลาการทำงานที่มีประสิทธิภาพหรือยัง?',
    'mock.startTiming': 'เริ่มจับเวลา',
    'mock.todaysMood': 'อารมณ์วันนี้',
    'mock.noCheckIn': 'ยังไม่ได้เช็คอินอารมณ์ เริ่มเช็คอินครั้งแรกของคุณวันนี้เลย',
    'mock.checkMoodNow': 'เช็คอารมณ์ตอนนี้',
    'mock.history': 'ประวัติ',
    'mock.wellnessMetrics': 'ตัวชี้วัดความเป็นอยู่',
    'mock.today': 'วันนี้',
    'mock.streak': 'ความต่อเนื่อง',
    'mock.focus7d': 'โฟกัส 7 วัน',
    'mock.done7d': 'เสร็จสิ้น 7 วัน',
    'mock.pomodoroProtocol': 'ระบบ Pomodoro',
    'mock.custom': 'กำหนดเอง',
    'mock.reading': 'การอ่าน',
    'mock.gym': 'เข้ายิม',
    'mock.math': 'แบบทดสอบคณิต',
    'mock.editProfile': 'แก้ไขโปรไฟล์',
    'mock.accountSettings': 'ตั้งค่าบัญชี',
    'mock.darkMode': 'โหมดมืด',
    'mock.favorites': 'รายการโปรด',
    'mock.premium': 'เวอร์ชันพรีเมียม',
    'mock.exportData': 'ส่งออกข้อมูล',
    'mock.signOut': 'ออกจากระบบ',
    'mock.currentStreak': 'ความต่อเนื่องปัจจุบัน: 0 วัน',
    'mock.systemSettings': 'ตั้งค่าระบบ',

    // CTA
    'cta.eyebrow': 'เริ่มต้นเลย',
    'cta.title': 'พร้อมโฟกัสในแบบที่เหมาะกับคุณแล้วหรือยัง?',
    'cta.desc': 'เริ่มต้นการทำงานด้วยความเข้าใจตัวเอง และโฟกัสได้อย่างเป็นธรรมชาติมากขึ้น',
    'cta.primary': 'ลองใช้ Nozofibi',
    'cta.secondary': 'เริ่มการเดินทางของคุณ',
    
    // Footer
    'footer.tagline': 'เพื่อนคู่ใจเพื่อการทำงานที่มีประสิทธิภาพและสมดุล',
    'footer.product': 'ผลิตภัณฑ์',
    'footer.features': 'ฟีเจอร์',
    'footer.integrations': 'การเชื่อมต่อ',
    'footer.pricing': 'ราคา',
    'footer.changelog': 'รายการบันทึก',
    'footer.company': 'บริษัท',
    'footer.about': 'เกี่ยวกับเรา',
    'footer.blog': 'บล็อก',
    'footer.careers': 'ร่วมงานกับเรา',
    'footer.contact': 'ติดต่อเรา',
    'footer.legal': 'กฎหมาย',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'footer.terms': 'ข้อกำหนดการใช้งาน',
    'footer.cookie': 'นโยบายคุกกี้',
    'footer.rights': '© 2026 Nozofibi. สร้างขึ้นเพื่อจิตใจที่ดีขึ้น',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
