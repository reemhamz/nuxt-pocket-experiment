<template>
  <div>
    <div>{{ $t('hello-user', { userName }) }}</div>
    <div>{{ $t('shared-photos', { userName, photoCount, userGender }) }}</div>

    <button @click="changeLocale('en')">English</button>
    <button @click="changeLocale('de')">German</button>
    <button @click="changeLocale('fr')">French</button>
  </div>
</template>

<script>
import { changeLocale } from '~/plugins/fluent-vue'

export default {
  data () {
    return {
      userName: 'John Doe',
      userGender: 'male',
      photoCount: 10
    }
  },
  methods: {
    changeLocale
  }
}
</script>

<fluent locale="en">
# Simple things are simple.
hello-user = Hello, {$userName}!

# Complex things are possible.
shared-photos =
  {$userName} {$photoCount ->
     [one] added one photo
    *[other] added {$photoCount} new photos
  } to {$userGender ->
     [male] his stream
     [female] her stream
    *[other] their stream
  }.
</fluent>

<fluent locale="de">
hello-user = Hallo, {$userName}!
</fluent>
