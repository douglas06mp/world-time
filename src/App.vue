<template>
  <div font-sans bg-canvas h-screen>
    <Navbar />
    <div border="~ base rounded" bg-base shadow m2>
      <ActionBar />
      <TimeScheduler />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.dark {
  background: #222;
  color: #fff;
  color-scheme: dark;
}
</style>
