// JavaScript Document
$(document).ready(() => {
	$('#cart').on('click', () => {
		$('#cartMenu').show();
	});
	$('#cart').mouseleave(() => {
		$('#cartMenu').hide();
	});
	
	$('#account').on('click', () => {
		$('#accountMenu').show();
	});
	$('#account').mouseleave(() => {
		$('#accountMenu').hide();
	});

	$('#help').on('click', () => {
		$('#helpMenu').show();
	});
	$('#help').mouseleave(() => {
		$('#helpMenu').hide();
	});
	
});