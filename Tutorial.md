# AngularJS_Services

There are five ways of creating services. This explains the differences between them and when to use what. This module also explains the usage of Providers Vs services, dependency annotations (Injecting them is easy)

5 Service flavors:
	1. Provider Services
		This is the most basic way of creating services. All other mechanims of creating services interally uses the provider services. This is highly configurable as well. We will see the examples anyway.
	2. Factory Services
		This is simple wrapper around providers. All examples over Google suggests to use the factories whenever there is a need to use services. But we will try to give the explanation on why and when to use this.
	3. Services
		This is wrapper around factories. So it is an abstraction over factories and in turn over the proviers.
	4.	Value Services
		This is also wrapper around factory
	5.	Constant Services
		This looks exactly same as value services by syntax and usage. But this is slightly different than all other services. This is the only one which doesn't calls factories or providers internally.