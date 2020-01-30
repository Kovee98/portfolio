<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Education</h1>

            <div v-for="school in schools" :key="school.id">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{{school.name}}</p>
                                <p class="subtitle is-6">{{school.major}}</p>
                            </div>
                            <time datetime="2016-1-1">{{school.grad}}</time>
                        </div>

                        <span class="content" v-for="course in school.courses" :key="course.id">
                            {{course}},
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data () {
        return {
            schools: [
                {
                    name: 'Tennessee Tech University',
                    major: 'Computer Science - Software Engineering',
                    grad: 'May 2019',
                    courses: [ 'Principles of Computing', 'Problem Solving and Computer Programming', 'Data Structures and Algorithms', 'Object-Oriented Programming and Design', 'Design of Algorithms', 'Discrete Structures for Computer Science', 'Databases', 'Computer Organization and Assembly Programming', 'Parallel Computing', 'Software Engineering', 'Programming Languages', 'Operating Systems', 'Computer Architecture' ]
                }
            ]
        };
    }
};
</script>
