<template>
	<section class="hero is-dark">
		<div class="hero-body">
			<span class="tag is-dark is-large is-rounded">{{ question.id }}</span>
			<h3 class="is-size-3">{{ question.title }}</h3>
			<slot></slot>
		</div>
	</section>
</template>

<script>
export default {
	props: {
		question: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style lang="scss">
.hero {
	margin-bottom: 2em;
	border-radius: 0.85rem;
	background-size: cover;
	background-blend-mode: multiply;

	h3 {
		margin-bottom: 5em;
	}
}

.button[disabled],
fieldset[disabled] .button {
	opacity: 1;
}
</style>
