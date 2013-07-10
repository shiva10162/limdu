machine-learning
================

A collection of machine learning and text categorization modules for Node.js, from various sources.

Supports the following classifiers:

* Bayesian classifier - a fork of [Heather Arthur's classifier project](https://github.com/harthur/classifier).
* Neural Network classifier - a fork of [Heather Arthur's brain project](https://github.com/harthur/brain).
* SVM classifier - a fork of [Andrej karpathy's svmjs project](https://github.com/karpathy/svmjs).
* Perceptron - based on [John Chesley's perceptron project](https://github.com/chesles/perceptron).
* BayesClassifier - an alternative implementation, from a fork of [Chris Umbel's apparatus project](https://github.com/chesles/perceptron).
* LogisticRegressionClassifier - from a fork of  [Chris Umbel's apparatus project](https://github.com/chesles/perceptron).
* Winnow - original implementation by Erel Segal-haLevi.

The forks supply a consistent interface to all classifiers:

* trainOnline(sample, class) - tell the classifier that the given sample belongs to the given class. This function is supported only for the Bayesian classifiers, Perceptron and Winnow.
* trainBatch([{input:sample1,output:class1}, {input:sample2,output:class2},... ) -  tell the classifier that the given samples belong to the given classes.
* classify(sample) - ask the classifier about the class of a new sample.
* classify(sample, explain) - ask the classifier to tell you the class of a new sample, and to add an explanation of why it thinks this is the class.
* toJSON() - convert the class to a JSON object (for serialization)
* fromJSON(json) - fill an initialized class from the given JSON object.

There are several classes and methods that work for all classifiers:

* BinaryClassifierSet - takes a binary classifier class (one of the supported classifiers, above), and uses it to create a set of binary classifiers - one per class. This set can return zero or more classes per instance (Note: this is different than multi-class ciassifier, that returns a single class per instance).
* EnhancedClassifier - can add custom feature extractors and feature lookup-tables to any supported classifie.
* 

UNDER CONSTRUCTION
