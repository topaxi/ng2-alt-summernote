# ng2-alt-summernote

Component to use summernote in Angular 2.

Example:
--------
[Example](https://carlescs.github.io/testangular/)

The example repo is located [here](https://github.com/carlescs/testangular).

Usage:
------
To use it with angular-cli:

1. Install jquery, bootstrap and summernote:
   ```
   npm install --save jquery
   npm install --save bootstrap
   npm install --summernote
   ```

2. Add scripts to `angular-cli.json`:
   ```
   "scripts": [
      "../node_modules/jquery/dist/jquery.min.js",
      "../node_modules/bootstrap/dist/js/bootstrap.min.js",
      "../node_modules/summernote/dist/summernote.min.js"
      ],
   ```

3. Add styles to `angular-cli.json`:
   ``` 
   "styles": [
      "styles.css",
      "../node_modules/bootstrap/dist/css/bootstrap.min.css",
      "../node_modules/summernote/dist/summernote.css"
      ],
   ```

4. Install `ng2-alt-summernote`:

        npm install --save npm-alt-summernote

5. Import `SummernoteModule` in `app.module.ts`:

    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FormsModule } from '@angular/forms';
    import { HttpModule } from '@angular/http';

    import {SummernoteModule} from 'ng2-alt-summernote';

    import { AppComponent } from './app.component';

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        SummernoteModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
    ```

6. Use it in you components:

    ```html
    <summernote [(ngModel)]="text" (options)="options"></summernote>
    ```

-----

# Note:

This module is based on [ng2-summernote](https://github.com/martinsvb/ng2-summernote). I tried forking the repo to fix the issues I was having but decided to start from scratch because it had some things that I didn't need.

