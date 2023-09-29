function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
    Student.prototype.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
    if(Array.isArray(this.marks)){
        for(let elements of marksToAdd){
            this.marks.push(elements);
        }
    }    
}

Student.prototype.getAverage = function () {
    let average = 0;
    let sum = 0;
    if(Array.isArray(this.marks) && this.marks.length > 0){
        for (let elements of this.marks){
            sum += elements;
        }
        average = sum / this.marks.length;
    }
    return average;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete Student.prototype.subject;
  Student.prototype.excluded = reason;
}
