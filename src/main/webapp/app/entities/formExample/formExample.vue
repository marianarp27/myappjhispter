<template>
  <div>
    <form class="vue-form" @submit.prevent="submit">
      <h3>Vue Form Input's</h3>
      <div class="full-name">
        <div class="first-name">
          <label class="label" for="firstname">First name</label>
          <input type="text" name="firstname" id="F_name" required="" v-model="name.first" />
        </div>

        <div class="last-name">
          <label class="label" for="lastname">Last name</label>
          <input type="text" name="lastname" id="L_name" required="" v-model="name.last" />
        </div>
      </div>

      <div>
        <label class="label">Select Plan</label>
        <select v-model="selection.optionSelected">
          <option disabled value="">Please select one</option>
          <option value="JavaScript">Learn JavaScript</option>
          <option value="Vue">Learn Vue.js</option>
          <option value="Something">Build Something Awesome</option>
        </select>
      </div>

      <div>
        <label class="label">Category</label>
        <input type="checkbox" id="web-dev" value="Web Developer" v-model="selection.checkedBox" />
        <label for="web-dev">Web Developer</label>
        <input type="checkbox" id="web-design" value="Web Design" v-model="selection.checkedBox" />
        <label for="web-design">Web Design</label>
        <input type="checkbox" id="other" value="Other" v-model="selection.checkedBox" />
        <label for="other">Other</label>
      </div>

      <div>
        <label class="label">Message</label>
        <textarea v-model="message.text" name="textarea" id="textarea" required="" :maxlength="message.maxlenght"></textarea>
        <span class="counter">{{ message.text.length }} / {{ message.maxlenght }}</span>
      </div>

      <div>
        <input type="submit" value="Submit Form" />
      </div>
    </form>
  </div>
</template>
<script lang="ts" src="./formExample.component.ts"></script>
