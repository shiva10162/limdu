var trainAndTest = require("./trainAndTest"); 
module.exports = {
	hash: require("./hash"),
	partitions: require("./partitions"),
	PrecisionRecall: require("./PrecisionRecall"),
	serialize: require("./serialize"),
	testLite: trainAndTest.testLite,
	test: trainAndTest.test,
	compare: trainAndTest.compare,
	trainAndTestLite: trainAndTest.trainAndTestLite,
	trainAndTest: trainAndTest.trainAndTest,
	trainAndCompare: trainAndTest.trainAndCompare,
	learningCurve: trainAndTest.learningCurve,
	splitToEasyAndHard: trainAndTest.splitToEasyAndHard,
	
	writeDataset: require("./trainAndTest").writeDataset,
	hammingDistance: require("./hamming").hammingDistance,
	
	arff: require("./arff"),
	json: require("./json"),
}

