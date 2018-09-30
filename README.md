# social-mern

- TEST API's

| METHOD 	  | ROUTE             	      |EXPECT            	  | ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	      |-----------------	  |---------------	|-------------	|
| GET    	  | **`/api/user/test`**    	| "API connected" 	  | PUBLIC        	| Test route  	|
| GET    	  | **`/api/profile/test`** 	| "API connected" 	  | PUBLIC        	| Test route  	|
| GET    	  | **`/api/posts/test`**   	| "API connected" 	  | PUBLIC        	| Test route  	|


- USER API's

| METHOD 	  | ROUTE                   	| EXPECT          	| ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------       	|-----------------	|---------------	|-------------	|
| POST    	| **`api/users/login`**    	| success callback & token 	| PUBLIC        	| Login route  	|
| POST    	| **`api/users/register`** 	| user            	| PUBLIC        	| Register route|



- PROFILE API's

| METHOD 	  | ROUTE             	              | EXPECT          	| ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	              |-----------------	|---------------	|-------------	|
| GET    	  | **`api/profile/all`**  	          | all profile     	| PUBLIC        	| all profile  	|
| GET    	  | **`api/profile/handle/:handle`** 	| profile         	| PUBLIC        	| handle  *e.g.* `/handle/saurabh` |
| GET    	  | **`api/profile/user/:user_id`**	  | profile         	| PUBLIC        	| user profile  *e.g.* `/user/5j3jwhb7rsgf87u` |
| POST      | **`api/profile`**                 | profile form     	| PRIVATE       	| edit OR create profile  |

- POST API's

| METHOD 	  | ROUTE             	              | EXPECT          	| ACCESSIBILITY 	| DESCRIPTION 	|
|--------	  |-------------------	              |-----------------	|---------------	|-------------	|
| GET    	  | **`api/posts`**  	                | all posts        	| PUBLIC        	| all posts    	|
| GET    	  | **`api/posts/:id`** 	            | post         	    | PUBLIC        	| *e.g.* `/posts/34wre4546er56e` |
| POST    	| **`api/posts`**  	                | post form       	| PRIVATE        	| create post   |
| DELETE    | **`api/posts/:id`**               | success callback  | PRIVATE       	| delete post *e.g.* `/posts/34wre4546er56e`  |
| POST    	| **`api/posts/like/:id`**  	      | updated post      | PRIVATE        	| like post  *e.g.* `/posts/like/34wre4546er56e`|
| POST    	| **`api/posts/unlike/:id`**  	    | updated post      | PRIVATE      | unlike post  *e.g.* `/posts/unlike/34wre4546er56e`|
| POST    	| **`api/posts/comment/:id`**  	  | updated post    | PRIVATE      | comment post  *e.g.* `/posts/comment/34wre4546er56e`|
| DELETE | **`api/posts/comment/:id/:comment_id`** | updated post | PRIVATE| delete comment  *e.g.* `/posts/comment/4ses5hjwjg/57ywegf7estfiueg7`|





