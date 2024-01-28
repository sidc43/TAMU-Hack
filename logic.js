class Course {
    constructor(code, prerequisites = [], grade = 0, semester = 0) {
      this.code = code;
      this.prerequisites = prerequisites;
      this.academicYear = academicYear;
      this.semester = semester;
    }
  }
  
  class CollegeMajorGraph {
    constructor() {
      this.courses = {};
    }
  
    addCourse(code, prerequisites = [], academicYear = 0, semester = 0) {
      this.courses[code] = new Course(code, prerequisites, academicYear);
    }
  
    canEnrollInCourse(code, enrolledCourses) {
      const course = this.courses[code];
  

      for (const prerequisiteCode of course.prerequisites) {
        if (!enrolledCourses.includes(prerequisiteCode)) {
          return false;
        }
      }
  
      return true;
    }
  
    preselectCourses(academicYear) {
      const preselectedCourses = [];
  
      for (const code in this.courses) {
        if (this.courses.hasOwnProperty(code)) {
          const course = this.courses[code];
  
          if (course.academicYear <= academicYear && this.canEnrollInCourse(code, preselectedCourses)) {
            preselectedCourses.push(code);
          }
        }
      }
  
      return preselectedCourses;
    }
  
    displayGraph() {
      console.log("Graph:");
  
      for (const code in this.courses) {
        if (this.courses.hasOwnProperty(code)) {
          const neighbors = this.courses[code].prerequisites.join(', ');
          console.log(`${code} -> ${neighbors}`);
        }
      }
    }
  }
  