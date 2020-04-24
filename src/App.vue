<template>
	<div>
		<quiz-header></quiz-header>
		<div class="container has-text-centered">
			<quiz-question
				v-for="(question, index) in questions"
				:key="index"
				:question="question"
				:title="question.title"
				:style="question.image"
			>
				<div class="buttons" data-test="pergunta" :data-resposta="question.dataAnswer">
					<b-button
						expanded
						data-test="opcao"
						v-for="(option, i) in question.options"
						:key="i"
						:class="[classes.btn, option.class]"
						:outlined="!option.class"
						:inverted="!option.class"
						:disabled="question.answered"
						@click="checkAnswer(option, index)"
						>{{ option.value }}</b-button
					>
				</div>
			</quiz-question>
		</div>
		<quiz-result
			v-if="results.answered.length === questions.length"
			:title="results.title"
			:subtitle="resultText"
			:data-resultado="results.corrects.length"
		>
			<b-button @click="resetQuiz()" class="is-info" data-test="refazer">{{ results.btn.label }}</b-button>
		</quiz-result>
		<quiz-footer></quiz-footer>
	</div>
</template>

<script>
import QuizQuestion from './components/QuizQuestion';
import QuizResult from './components/QuizResult';
import QuizHeader from './components/QuizHeader';
import QuizFooter from './components/QuizFooter';

export default {
	components: {
		QuizQuestion,
		QuizResult,
		QuizHeader,
		QuizFooter,
	},

	data: () => ({
		results: {
			title: 'Resultado',
			answered: [],
			corrects: [],
			btn: {
				label: 'Refazer o Quiz',
			},
		},
		classes: {
			correct: 'is-success',
			wrong: 'is-danger',
			normal: 'is-dark is-outlined',
			btn: 'is-medium is-rounded',
		},
		questions: [
			{
				id: 1,
				title: 'Como é chamado o método onde o café é extraído sob alta pressão?',
				answered: false,
				correctAnswer: 'Espresso',
				dataAnswer: '',
				options: [
					{
						value: 'Expresso',
					},
					{
						value: 'Pressionatto',
					},
					{
						value: 'Under pressure',
					},
					{
						value: 'Espresso',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
				},
			},
			{
				id: 2,
				title: 'Qual método apresenta maior incidência de cafeína por mililitro?',
				answered: false,
				correctAnswer: 'Prensa francesa',
				dataAnswer: '',
				options: [
					{
						value: 'Prensa francesa',
					},
					{
						value: 'Aeropress',
					},
					{
						value: 'Hario V60',
					},
					{
						value: 'Kalita',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1469957761306-556935073eba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80)',
				},
			},
			{
				id: 3,
				title: 'Como se chama o profissional especializado preparo do café e operar equipamentos da cafeteria?',
				answered: false,
				correctAnswer: 'Barista',
				dataAnswer: '',
				options: [
					{
						value: 'Cafezista',
					},
					{
						value: 'Barista',
					},
					{
						value: 'Coffeeman',
					},
					{
						value: 'Cafeicultor',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1520460095596-52dcd38c5f20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
				},
			},
			{
				id: 4,
				title: 'Quem criou o filtro de papel?',
				answered: false,
				correctAnswer: 'Mellita Bentz',
				dataAnswer: '',
				options: [
					{
						value: 'Kanda Sudacho',
					},
					{
						value: 'Mellita Bentz',
					},
					{
						value: 'Francesco Illy',
					},
					{
						value: 'Henri Nestlé',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
				},
			},
			{
				id: 5,
				title: 'Como é chamado o café que é extraído a frio?',
				answered: false,
				correctAnswer: 'Cold brew',
				dataAnswer: '',
				options: [
					{
						value: 'Iced coffee',
					},
					{
						value: 'Koffeist',
					},
					{
						value: 'Cold brew',
					},
					{
						value: 'Cold coffee',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1471015060382-6cbd8b4e34d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
				},
			},
			{
				id: 6,
				title: 'Qual o país líder no consumo de café, considerando quantidade por pessoa?',
				answered: false,
				correctAnswer: 'Finlândia',
				dataAnswer: '',
				options: [
					{
						value: 'Brasil',
					},
					{
						value: 'Estados Unidos da América',
					},
					{
						value: 'Itália',
					},
					{
						value: 'Finlândia',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1492158244976-29b84ba93025?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)',
				},
			},
			{
				id: 7,
				title: 'Qual o maior produtor de café do mundo?',
				answered: false,
				correctAnswer: 'Brasil',
				dataAnswer: '',
				options: [
					{
						value: 'Colômbia',
					},
					{
						value: 'Indonésia',
					},
					{
						value: 'Brasil',
					},
					{
						value: 'Vietnã',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80)',
				},
			},
			{
				id: 8,
				title: 'O café Kopi Luwak, mais caro do mundo, é produzido com os grãos encontrados nas fezes de qual animal?',
				answered: false,
				correctAnswer: 'Civeta',
				dataAnswer: '',
				options: [
					{
						value: 'Pangolin',
					},
					{
						value: 'Civeta',
					},
					{
						value: 'Doninha',
					},
					{
						value: 'Chinchila',
					},
				],
				image: {
					backgroundImage:
						'url(https://images.unsplash.com/photo-1545086421-168708d4f603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1491&q=80)',
				},
			},
		],
	}),
	computed: {
		resultText() {
			const corrects = this.results.corrects.length;
			const answered = this.results.answered.length;
			const congrats = corrects === answered ? 'Parabéns! ' : '';

			return `${congrats}Você acertou ${corrects} de ${answered}`;
		},
	},
	methods: {
		checkAnswer(option, index) {
			const question = this.questions[index];

			question.answered = true;
			this.results.answered.push(question.id);

			if (option.value === this.questions[index].correctAnswer) {
				this.results.corrects.push(question.id);
				option.class = this.classes.correct;
			} else {
				option.class = this.classes.wrong;
				question.options.map((item) => {
					if (item.value === question.correctAnswer) {
						item.class = this.classes.correct;
					}

					return item;
				});
			}

			question.dataAnswer = this.setDataResposta(index);
		},
		setDataResposta(index) {
			const id = this.questions[index].id;

			if (this.results.answered.find((item) => item === id)) {
				return this.results.corrects.find((item) => item === id) ? 'correta' : 'errada';
			}

			return '';
		},
		resetQuiz() {
			this.questions.map((question) => {
				question.answered = false;
				question.dataAnswer = '';
				question.options.map((option) => {
					delete option.class;

					return option;
				});
			});

			this.results.answered = [];
			this.results.corrects = [];
			this.scrollToTop();
		},
		scrollToTop() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		},
	},
};
</script>

<style lang="scss">
.container {
	max-width: 840px;
}
</style>
