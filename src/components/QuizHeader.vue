<template>
	<section class="hero has-text-centered">
		<div class="hero-body">
			<div class="container">
				<h1 class="title">{{ title }}</h1>
				<p class="subtitle">{{ subtitle }}</p>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			title: 'Quiz do café!',
			subtitle: 'Veja o quanto você sabe sobre café respondendo essas 8 perguntas',
		};
	},
};
</script>

<style></style>
